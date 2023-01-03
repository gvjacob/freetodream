import cn from 'classnames';

import Meta from '@components/Meta';
import ArticleNavigation from '@components/ArticleNavigation';
import ArticleActions from '@components/ArticleActions';
import { useLocaleTranslation } from '@utils/i18n';

export default function ArticleLayout({ title, navigation, children }) {
  const lt = useLocaleTranslation();

  return (
    <article>
      <Meta title={`${lt(title)} — #FreeToDream`} />

      <header className="hv-site-padding grid grid-cols-12 gap-4 pt-24 pb-6 bg-blue mb-8">
        <h1
          className={cn(
            'col-start-1 col-end-12 text-5xl text-white font-bold',
            'md:col-start-2 md:col-end-10 md:text-6xl',
          )}
        >
          {lt(title)}
        </h1>
      </header>

      <div className="hv-site-padding grid grid-cols-12 grid-rows-1 gap-4">
        <div className="flex flex-col h-full sm:col-start-9 row-start-1 col-span-full">
          {navigation && <ArticleNavigation className="sticky top-10" items={navigation} />}
          <ArticleActions className="sticky bottom-4 mt-auto" />
        </div>

        <div
          className={cn(
            'hv-article-body',
            'col-start-1 col-span-full',
            'sm:col-start-1 sm:col-end-8',
            'md:col-start-2 md:col-end-8',
          )}
        >
          {children}
        </div>
      </div>
    </article>
  );
}
