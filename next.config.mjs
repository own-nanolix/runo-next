/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every page is static, so `next build` writes plain HTML/CSS/JS to ./out (host it anywhere).
  // Remove this line if you later add server features (API routes, server actions, ISR).
  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
