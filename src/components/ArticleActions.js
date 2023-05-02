import cn from 'classnames';

import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';

export default function ArticleActions({ className }) {
  const lt = useLocaleTranslation();

  return (
    <div className={className}>
      <div className="flex justify-between space-x-2">
        <a
          className="w-full rounded-md bg-blue py-3 text-center font-semibold text-white transition-colors hocus:bg-blue-900"
          href={lt('navigation.apply-form')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {lt('article.actions-apply')}
        </a>
        <button
          className={cn(
            'flex flex-shrink-0 items-center rounded-md bg-white px-3 transition-colors',
            'hocus:bg-blue-900 hocus:fill-white hocus:text-white',
          )}
          onClick={() => window?.print()}
        >
          <SVG.PrintIcon className="mr-2 w-4" aria-hidden />
          <span>{lt('article.actions-print')}</span>
        </button>
      </div>
    </div>
  );
}
