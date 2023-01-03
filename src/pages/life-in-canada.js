import { useRouter } from 'next/router';

import ArticleLayout from '@components/ArticleLayout';
import enContent from '@articles/life-in-canada.en.mdx';
import koContent from '@articles/life-in-canada.ko.mdx';

export default function LifeInCanada() {
  const { locale } = useRouter();
  const content = locale === 'en' ? enContent() : locale === 'ko' ? koContent() : null;

  return (
    <ArticleLayout
      title="navigation.life-in-canada"
      navigation={[
        {
          id: '#family',
          title: 'Family',
        },
        {
          id: '#financial-support',
          title: 'Financial Support',
        },
        {
          id: '#permanent-residency',
          title: 'Permanent Residency',
        },
      ]}
    >
      {content}
    </ArticleLayout>
  );
}
