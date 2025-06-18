/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 Add this line for static export
  images: {
    unoptimized: true, // 👈 Required for static export if using next/image
    domains: [
      'utfs.io',
      'img.clerk.com',
      'subdomain',
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;