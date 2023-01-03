import { useRouter } from 'next/router';

import ArticleLayout from '@components/ArticleLayout';
import enContent from '@articles/process.en.mdx';
import koContent from '@articles/process.ko.mdx';

export default function Process() {
  const { locale } = useRouter();
  const content = locale === 'en' ? enContent() : locale === 'ko' ? koContent() : null;

  return (
    <ArticleLayout
      title="navigation.process"
      navigation={[
        {
          id: '#overview',
          title: 'Overview',
        },
        {
          id: '#faqs',
          title: 'Frequently Asked Questions',
        },
      ]}
    >
      {content}
    </ArticleLayout>
  );
}
