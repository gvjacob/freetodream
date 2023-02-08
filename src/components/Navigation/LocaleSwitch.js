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
      className={cn('flex items-center space-x-1 text-xs text-white sm:text-sm', className)}
      onClick={() => localeSwitch(router.locale === 'en' ? 'ko' : 'en')}
      {...rest}
    >
      <GlobeSVG className="w-4" />
      <span className="shrink-0">{lt('navigation.locale-switch')}</span>
    </button>
  );
}
