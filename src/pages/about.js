import { useRouter } from 'next/router';

import ArticleLayout from '@components/ArticleLayout';
import enContent, { title as enTitle } from '@articles/about.en.mdx';
import koContent, { title as koTitle } from '@articles/about.ko.mdx';

export default function About() {
  const { locale } = useRouter();
  const content = locale === 'en' ? enContent() : locale === 'ko' ? koContent() : null;
  const title = locale === 'en' ? enTitle : locale === 'ko' ? koTitle : null;

  return <ArticleLayout title={title}>{content}</ArticleLayout>;
}
