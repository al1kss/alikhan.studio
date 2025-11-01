/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    return config
  },
}

module.exports = nextConfig