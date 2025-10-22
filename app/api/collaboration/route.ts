import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import clientPromise from '@/lib/mongodb'

const REQUIRED_FIELDS = ['fullName', 'companyName', 'role', 'email', 'phone', 'collaborationTypes', 'idea', 'objective']

type CollaborationPayload = {
  fullName: string
  companyName: string
  role: string
  email: string
  phone: string
  website?: string
  collaborationTypes: string[]
  otherCollaboration?: string
  idea: string
  objective: string
  timeline?: string
  createdAt?: Date
}

const renderEmail = (payload: CollaborationPayload, hasAttachment: boolean, fileName?: string) => {
  const joinedTypes = payload.collaborationTypes
    .map((type) => type.replace(/-/g, ' '))
    .map((type) => type.replace(/\b\w/g, (char) => char.toUpperCase()))
    .join(', ')

  return `New collaboration request submitted via Perfionix AI website.\n\n` +
    `Contact Information\n` +
    `---------------------\n` +
    `Full Name: ${payload.fullName}\n` +
    `Company / Organization: ${payload.companyName}\n` +
    `Designation / Role: ${payload.role}\n` +
    `Email: ${payload.email}\n` +
    `Phone: ${payload.phone}\n` +
    `Website / LinkedIn: ${payload.website || 'Not provided'}\n\n` +
    `Collaboration Details\n` +
    `---------------------\n` +
    `Types Selected: ${joinedTypes}\n` +
    `Other Collaboration: ${payload.otherCollaboration || 'Not specified'}\n` +
    `Idea / Proposal:\n${payload.idea}\n\n` +
    `Objective:\n${payload.objective}\n\n` +
    `Timeline / Duration: ${payload.timeline || 'Not specified'}\n` +
    (hasAttachment ? `\nAttachment: ${fileName || 'Document attached'}\n` : '')
}

const createTransporter = () => {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !port || !user || !pass) {
    throw new Error('SMTP configuration missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS env variables.')
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false,
      minVersion: 'TLSv1.2'
    }
  })
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    // Extract file attachment if present
    const attachment = formData.get('attachment') as File | null
    
    // Parse collaborationTypes from JSON string
    const collaborationTypesStr = formData.get('collaborationTypes') as string
    const collaborationTypes = collaborationTypesStr ? JSON.parse(collaborationTypesStr) : []
    
    // Build payload object
    const payload: Partial<CollaborationPayload> = {
      fullName: formData.get('fullName') as string,
      companyName: formData.get('companyName') as string,
      role: formData.get('role') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      website: formData.get('website') as string || undefined,
      collaborationTypes,
      otherCollaboration: formData.get('otherCollaboration') as string || undefined,
      idea: formData.get('idea') as string,
      objective: formData.get('objective') as string,
      timeline: formData.get('timeline') as string || undefined
    }

    for (const field of REQUIRED_FIELDS) {
      if (!payload[field as keyof CollaborationPayload] ||
        (field === 'collaborationTypes' && Array.isArray(payload.collaborationTypes) && payload.collaborationTypes.length === 0)) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    if (!Array.isArray(payload.collaborationTypes)) {
      return NextResponse.json({ error: 'Invalid collaborationTypes format.' }, { status: 400 })
    }

    // Try MongoDB storage
    try {
      const client = await clientPromise
      const db = client.db('perfionix')
      const collection = db.collection<CollaborationPayload>('collaborationRequests')

      await collection.insertOne({
        ...(payload as CollaborationPayload),
        createdAt: new Date()
      })
      console.log('[Collaboration API] MongoDB storage successful')
    } catch (dbError: any) {
      console.error('[Collaboration API] MongoDB Error:', dbError.message)
      // Continue to send email even if DB fails
    }

    // Send email
    try {
      const transporter = createTransporter()

      const mailOptions: any = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.COLLABORATION_EMAIL_TO || 'rahangdaleshubham2003@gmail.com',
        subject: `New collaboration request from ${payload.fullName}`,
        text: renderEmail(payload as CollaborationPayload, !!attachment, attachment?.name)
      }

      // Add attachment if present
      if (attachment) {
        const buffer = Buffer.from(await attachment.arrayBuffer())
        mailOptions.attachments = [{
          filename: attachment.name,
          content: buffer
        }]
      }

      await transporter.sendMail(mailOptions)
      console.log('[Collaboration API] Email sent successfully')
    } catch (emailError: any) {
      console.error('[Collaboration API] Email Error:', emailError.message)
      return NextResponse.json(
        { error: 'Failed to send email: ' + emailError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('[Collaboration API] Unexpected Error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to process collaboration request.' },
      { status: 500 }
    )
  }
}
