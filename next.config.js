/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Enable compression
  compress: true,
  // Optimize CSS
  optimizeFonts: true,
  // Production source maps (disable for faster builds)
  productionBrowserSourceMaps: false,
  // React strict mode for better performance
  reactStrictMode: true,
  // Power optimizations
  poweredByHeader: false,
}

module.exports = nextConfig
