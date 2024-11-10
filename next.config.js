module.exports = {
  reactStrictMode: true,
}

// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/<repository-name>/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
