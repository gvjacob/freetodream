import cn from 'classnames';
import Meta from '@components/Meta';
import ArticleNavigation from '@components/ArticleNavigation';

export default function ArticleLayout({ title, navigation, children }) {
  return (
    <article className="hv-site-padding">
      <Meta title={`${title} | Hanvoice`} />

      <header className="grid grid-cols-12 gap-4 mt-24 mb-8">
        <h1
          className={cn(
            'col-start-1 col-end-12 text-5xl',
            'md:col-start-2 md:col-end-10 md:text-7xl',
          )}
        >
          {title}
        </h1>
      </header>

      <div className={cn('grid grid-cols-12 grid-rows-1 gap-4')}>
        <div className="h-full sm:col-start-11 md:col-start-9 row-start-1 col-span-full">
          <ArticleNavigation className="sticky top-20" items={navigation} />
        </div>

        <div
          className={cn(
            'hv-article-body',
            'col-start-1 col-span-full',
            'sm:col-start-1 sm:col-end-10',
            'md:col-start-2 md:col-end-8',
          )}
        >
          {children}
        </div>
      </div>
    </article>
  );
}
