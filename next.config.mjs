/** @type {import('next').NextConfig} */

import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    reactCompiler: false,
  },
  images: {
    unoptimized: true,
  },
}

export default withPayload(nextConfig)
