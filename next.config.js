/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '',
  basePath: '',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/plans': { page: '/plans' },
      '/faq': { page: '/faq' },
      '/404': { page: '/404' },
    };
  },
  trailingSlash: true,
};

module.exports = nextConfig;
