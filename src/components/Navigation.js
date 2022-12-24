import { useRouter } from 'next/router';

import SVG from '@components/SVG';
import { useLocaleTranslation, useLocaleSwitch } from '@utils/i18n';

function LocaleSwitch() {
  const router = useRouter();
  const lt = useLocaleTranslation();
  const localeSwitch = useLocaleSwitch();

  return (
    <button onClick={() => localeSwitch(router.locale === 'en' ? 'ko' : 'en')}>
      {lt('navigation.locale-switch')}
    </button>
  );
}

export default function Navigation() {
  return (
    <header className="px-4 py-4 bg-blue">
      <nav>
        <SVG.HanvoiceLogo className="w-10" />
      </nav>
      <LocaleSwitch />
    </header>
  );
}
