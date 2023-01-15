import cn from 'classnames';
import { useRouter } from 'next/router';

import GlobeSVG from '@svgs/globe.svg';
import { useLocaleTranslation, useLocaleSwitch } from '@utils/i18n';

export default function LocaleSwitch({ className, ...rest }) {
  const router = useRouter();
  const lt = useLocaleTranslation();
  const localeSwitch = useLocaleSwitch();

  return (
    <button
      className={cn(
        'text-xs sm:text-sm bg-white py-2 px-2 rounded-md transition flex items-center space-x-1',
        'hocus:bg-blue-900 hocus:text-white',
        className,
      )}
      onClick={() => localeSwitch(router.locale === 'en' ? 'ko' : 'en')}
      {...rest}
    >
      <GlobeSVG className="w-4" />
      <span className="shrink-0">{lt('navigation.locale-switch')}</span>
    </button>
  );
}
