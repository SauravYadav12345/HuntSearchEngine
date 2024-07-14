/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          pathname: '**',
        },
      ],
      domains: ['cdn.vectorstock.com'],
    },
  };
  
  export default nextConfig;
  