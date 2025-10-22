import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import clientPromise from '@/lib/mongodb'

const REQUIRED_FIELDS = ['name', 'email', 'subject', 'message'] as const

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
  createdAt?: Date
}

const renderEmail = (payload: ContactPayload) => {
  return `You have received a new contact message via the Perfionix AI website.\n\n` +
    `Name: ${payload.name}\n` +
    `Email: ${payload.email}\n` +
    `Subject: ${payload.subject}\n\n` +
    `Message:\n${payload.message}\n`
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
    const payload = (await request.json()) as Partial<ContactPayload>

    for (const field of REQUIRED_FIELDS) {
      if (!payload[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Try MongoDB storage
    try {
      const client = await clientPromise
      const db = client.db('perfionix')
      const collection = db.collection<ContactPayload>('contactMessages')

      await collection.insertOne({
        ...(payload as ContactPayload),
        createdAt: new Date()
      })
      console.log('[Contact API] MongoDB storage successful')
    } catch (dbError: any) {
      console.error('[Contact API] MongoDB Error:', dbError.message)
      // Continue to send email even if DB fails
    }

    // Send email
    try {
      const transporter = createTransporter()

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        replyTo: payload.email,
        to: process.env.COLLABORATION_EMAIL_TO || process.env.SMTP_USER,
        subject: `New contact message: ${payload.subject}`,
        text: renderEmail(payload as ContactPayload)
      }

      await transporter.sendMail(mailOptions)
      console.log('[Contact API] Email sent successfully')
    } catch (emailError: any) {
      console.error('[Contact API] Email Error:', emailError.message)
      return NextResponse.json(
        { error: 'Failed to send email: ' + emailError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('[Contact API] Unexpected Error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to process contact message.' },
      { status: 500 }
    )
  }
}
