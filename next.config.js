const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'mdx'],

  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
  },
});
