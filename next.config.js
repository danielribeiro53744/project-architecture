/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

// Combine both plugins
const baseConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // i18n: {
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en',
  //   localeDetection: true,
  // },
};

module.exports = withPWA(withMDX(baseConfig));
