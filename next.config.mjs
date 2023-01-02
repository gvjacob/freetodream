import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

/** @type {import('next').NextConfig} */
export default withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'mdx'],

  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
  },
});