/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Helpful Registry',
    description: 'Ubuntu with additional support and functionality.',
    icon: 'https://ari1110.github.io/kasm-registry/1.0/ubuntu.png',
    listUrl: 'https://ari1110.github.io/kasm-registry/',
    contactUrl: 'https://github.com/ari1110/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
