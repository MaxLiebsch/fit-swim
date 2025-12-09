/** @type {import('next').NextConfig} */ 

import createMDX from "@next/mdx";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    reactCompiler: false,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/, 
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(withPayload(nextConfig));
