/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  // Static export for Netlify/Pages
  output: 'export',
  // Use basePath only in production static deployment (e.g., GitHub Pages)
  basePath: isProd ? '/daniel-portfolio' : '',
  images: {
    unoptimized: true,
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'ext.same-assets.com',
      'ugc.same-assets.com',
    ],
    remotePatterns: [
      { protocol: 'https', hostname: 'source.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'ext.same-assets.com', pathname: '/**' },
      { protocol: 'https', hostname: 'ugc.same-assets.com', pathname: '/**' },
    ],
  },
};

module.exports = nextConfig;
