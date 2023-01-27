import cn from 'classnames';

import Meta from '@components/Meta';
import ArticleNavigation from '@components/ArticleNavigation';
import ArticleActions from '@components/ArticleActions';
import { useLocaleTranslation } from '@utils/i18n';

export default function ArticleLayout({ title, navigation, children }) {
  const lt = useLocaleTranslation();

  return (
    <article>
      <Meta title={`${lt(title)} — Free to Dream`} />

      <header className="bg-blue">
        <div className="2xl:container mx-auto hv-site-padding grid grid-cols-12 gap-4 pt-24 pb-6 mb-8 print:mb-0 xl:pt-48">
          <h1
            className={cn(
              'col-start-1 col-end-12 text-5xl text-white print:text-black',
              'md:col-start-2 md:col-end-10 md:text-6xl',
            )}
          >
            {lt(title)}
          </h1>
        </div>
      </header>

      <div className="2xl:container mx-auto">
        <div className="hv-site-padding grid grid-cols-12 grid-rows-1 gap-4">
          <div
            className={cn(
              'flex flex-col h-full sm:col-start-9 row-start-1 col-span-full print:hidden',
              !navigation && 'max-sm:hidden',
            )}
          >
            {navigation && (
              <ArticleNavigation className="max-sm:mb-2 sticky top-10" items={navigation} />
            )}
            <ArticleActions className="max-sm:hidden sticky bottom-4 mt-auto" />
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

          <ArticleActions className="print:hidden sm:hidden col-span-full mt-10" />
        </div>
      </div>
    </article>
  );
}
