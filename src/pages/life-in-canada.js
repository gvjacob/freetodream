import { useRouter } from 'next/router';

import ArticleLayout from '@components/ArticleLayout';

import enContent, {
  title as enTitle,
  navigation as enNavigation,
} from '@articles/life-in-canada.en.mdx';

import koContent, {
  title as koTitle,
  navigation as koNavigation,
} from '@articles/life-in-canada.ko.mdx';

export default function LifeInCanada() {
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
