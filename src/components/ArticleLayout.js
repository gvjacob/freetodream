import cn from 'classnames';

import Meta from '@components/Meta';
import Container from '@components/Container';
import ArticleNavigation from '@components/ArticleNavigation';
import ArticleActions from '@components/ArticleActions';
import { useLocaleTranslation } from '@utils/i18n';

export default function ArticleLayout({ title, navigation, children }) {
  const lt = useLocaleTranslation();

  return (
    <article>
      <Meta title={`${lt(title)} — Free to Dream`} />

      <header className="bg-blue">
        <Container className="mb-8 grid grid-cols-12 gap-4 pt-36 pb-6 print:mb-0 print:pt-12 sm:pt-48 xl:pt-72">
          <h1
            className={cn(
              'col-start-1 col-end-12 text-4xl text-white print:text-black',
              'md:col-start-2 md:col-end-10 md:text-6xl xl:text-7xl',
            )}
          >
            {lt(title)}
          </h1>
        </Container>
      </header>

      <Container>
        <div className="grid grid-cols-12 grid-rows-1 gap-4">
          <div
            className={cn(
              'col-span-full row-start-1 flex h-full flex-col print:hidden sm:col-start-9',
              !navigation && 'max-sm:hidden',
            )}
          >
            {navigation && (
              <ArticleNavigation className="sticky top-10 max-sm:mb-2" items={navigation} />
            )}
            <ArticleActions className="sticky bottom-4 mt-auto max-sm:hidden" />
          </div>

          <div
            className={cn(
              'hv-article-body',
              'col-span-full col-start-1',
              'sm:col-start-1 sm:col-end-8',
              'md:col-start-2 md:col-end-8',
            )}
          >
            {children}
          </div>

          <ArticleActions className="col-span-full mt-10 print:hidden sm:hidden" />
        </div>
      </Container>
    </article>
  );
}
