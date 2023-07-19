/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/page1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
