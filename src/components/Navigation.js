import cn from 'classnames';
import { useRouter } from 'next/router';

import SVG from '@components/SVG';
import { useLocaleTranslation, useLocaleSwitch } from '@utils/i18n';

function LocaleSwitch({ className, ...rest }) {
  const router = useRouter();
  const lt = useLocaleTranslation();
  const localeSwitch = useLocaleSwitch();

  return (
    <button
      className={cn(
        'bg-white py-1 px-2 rounded-sm transition',
        'hover:bg-blue-dark hover:text-white',
        'focus:bg-blue-dark focus:text-white',
        className,
      )}
      onClick={() => localeSwitch(router.locale === 'en' ? 'ko' : 'en')}
      {...rest}
    >
      {lt('navigation.locale-switch')}
    </button>
  );
}

export default function Navigation() {
  return (
    <header className="flex items-center px-4 py-4 bg-blue">
      <nav>
        <SVG.HanvoiceLogo className="w-8" />
      </nav>

      <LocaleSwitch />
    </header>
  );
}
