/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["pfsrealty.com"]
  },
  env: {
    MAPS_API: process.env.MAPS_API,
  }
}

module.exports = nextConfig
