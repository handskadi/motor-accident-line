/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — produces fully static files in ./out
  // that can be served from any static host (S3, Cloudflare Pages, Netlify, GitHub Pages).
  output: 'export',
  // Each route gets its own directory with index.html, e.g. /privacy/index.html
  trailingSlash: true,
  // Required for static export — disables Next.js image optimization server
  images: { unoptimized: true },
};

export default nextConfig;
