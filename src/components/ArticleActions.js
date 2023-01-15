import cn from 'classnames';

import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';

export default function ArticleActions({ className }) {
  const lt = useLocaleTranslation();

  return (
    <div className={className}>
      <p className="mb-4 text-sm max-w-[200px] text-gray-500 font-semibold">
        {lt('article.actions-heading')}
      </p>

      <div className="flex justify-between space-x-2">
        <button
          className={cn(
            'bg-blue text-white w-full rounded-md font-semibold py-2 transition-colors',
            'hocus:bg-blue-900',
          )}
        >
          {lt('article.actions-apply')}
        </button>
        <button
          className={cn(
            'bg-white rounded-md flex items-center px-3 flex-shrink-0 transition-colors',
            'hocus:bg-blue-900 hocus:text-white hocus:fill-white',
          )}
          onClick={() => window?.print()}
        >
          <SVG.PrintIcon className="w-4 mr-2" aria-hidden />
          <span>{lt('article.actions-print')}</span>
        </button>
      </div>
    </div>
  );
}
