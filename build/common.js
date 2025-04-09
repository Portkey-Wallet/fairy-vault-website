const rewritesConfig = require('./rewrites/index');
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return rewritesConfig;
  },
  images: {
    loader: 'akamai',
    path: '',
    domains: ['raw.githubusercontent.com', 's3.ap-northeast-1.amazonaws.com'],
    remotePatterns: {
      protocol: 'https',
      hostname: 's3.ap-northeast-1.amazonaws.com',
    },
  },
  // i18n: {
  //   locales: ['en-US', 'zh'],
  //   defaultLocale: 'en-US',
  // },
  productionBrowserSourceMaps: true,
  sentry: {
    hideSourceMaps: true,
  },
};
