import cn from 'classnames';
import Meta from '@components/Meta';

export default function ArticleLayout({ title, children }) {
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

      <div className={cn('grid grid-cols-12 gap-4')}>
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
