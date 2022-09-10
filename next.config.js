/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'external-content.duckduckgo.com', "localhost"]
  }
}

module.exports = nextConfig
