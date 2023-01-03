import { useRouter } from 'next/router';

import ArticleLayout from '@components/ArticleLayout';
import enContent from '@articles/about.en.mdx';
import koContent from '@articles/about.ko.mdx';

export default function About() {
  const { locale } = useRouter();
  const content = locale === 'en' ? enContent() : locale === 'ko' ? koContent() : null;

  return <ArticleLayout title="navigation.about-hanvoice">{content}</ArticleLayout>;
}
