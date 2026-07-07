/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/noise-texture-v1.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/en/a-tarsasagrol',
        destination: '/en/about',
        permanent: true,
      },
      {
        source: '/en/adatvedelmi-tajekoztato',
        destination: '/en/privacy-policy',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
