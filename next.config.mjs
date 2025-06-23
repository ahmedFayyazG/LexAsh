/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['utfs.io', 'img.clerk.com', 'subdomain'],
  },
};

export default nextConfig;