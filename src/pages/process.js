import { useRouter } from 'next/router';

import ArticleLayout from '@components/ArticleLayout';

import enContent, { title as enTitle, navigation as enNavigation } from '@articles/process.en.mdx';

import koContent, { title as koTitle, navigation as koNavigation } from '@articles/process.ko.mdx';

export default function Process() {
  const { locale } = useRouter();
  const content = locale === 'en' ? enContent() : locale === 'ko' ? koContent() : null;
  const title = locale === 'en' ? enTitle : locale === 'ko' ? koTitle : null;
  const navigation = locale === 'en' ? enNavigation : locale === 'ko' ? koNavigation : null;

  return (
    <ArticleLayout title={title} navigation={navigation}>
      {content}
    </ArticleLayout>
  );
}
