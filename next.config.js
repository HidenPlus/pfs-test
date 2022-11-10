/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["pfsrealty.com", "res.cloudinary.com"]
  },
  compiler: {
    styledComponents: true
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    })

    return config
  }
}

module.exports = nextConfig
