/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'utfs.io',
      'img.clerk.com',
      'subdomain',
    ],
  },
  // ❌ Remove or comment out this line:
  // output: 'export',
};

export default nextConfig;