/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fully static site: `next build` writes plain HTML/JS/CSS to ./out, served by Cloudflare Workers static assets.
  output: "export",
  // The Next.js image optimizer needs a server; images are pre-sized in /public instead.
  images: { unoptimized: true },
};

export default nextConfig;
