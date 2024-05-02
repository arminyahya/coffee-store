/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'emkan-coffee.com',
              port: '',
              pathname: '/wp-content/uploads/2020/12/**',
            },
          ],
    },
};

export default nextConfig;
