import cn from 'classnames';
import { useRouter } from 'next/router';

import { useLocaleTranslation, useLocaleSwitch } from '@utils/i18n';

export default function LocaleSwitch({ className, ...rest }) {
  const router = useRouter();
  const lt = useLocaleTranslation();
  const localeSwitch = useLocaleSwitch();

  return (
    <button
      className={cn(
        'text-xs sm:text-sm bg-white py-1 px-2 rounded-sm transition',
        'hocus:bg-blue-dark hocus:text-white',
        className,
      )}
      onClick={() => localeSwitch(router.locale === 'en' ? 'ko' : 'en')}
      {...rest}
    >
      {lt('navigation.locale-switch')}
    </button>
  );
}
