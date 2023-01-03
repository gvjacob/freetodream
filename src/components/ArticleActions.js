import cn from 'classnames';

import SVG from '@components/SVG';

export default function ArticleActions({ className }) {
  return (
    <div className={cn('', className)}>
      <p className="mb-4 text-sm max-w-[200px] text-gray-500 font-semibold">
        Secure your path towards a better future now.
      </p>

      <div className="flex justify-between space-x-2">
        <button className="bg-blue text-white w-full rounded-md font-semibold py-2">Apply</button>
        <button className="bg-white rounded-md flex items-center px-3  flex-shrink-0">
          <SVG.PrintIcon className="w-4 mr-2" aria-hidden />
          <span>Print</span>
        </button>
      </div>
    </div>
  );
}
