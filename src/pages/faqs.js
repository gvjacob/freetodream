import ArticleLayout from '@components/ArticleLayout';

import content, { title, navigation } from '@articles/faqs.ko.mdx';

export default function LifeInCanada() {
  return (
    <ArticleLayout title={title} navigation={navigation}>
      {content()}
    </ArticleLayout>
  );
}
