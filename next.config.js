/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // i18n: {
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en',
  //   localeDetection: true,
  // },
};

module.exports = withPWA(nextConfig);