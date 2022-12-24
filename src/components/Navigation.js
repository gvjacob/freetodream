import { useRouter } from 'next/router';

import { useLocaleTranslation, useLocaleSwitch } from '@utils/i18n';

function LocaleSwitch() {
  const router = useRouter();
  const lt = useLocaleTranslation();
  const localeSwitch = useLocaleSwitch();

  return (
    <button
      onClick={() => localeSwitch(router.locale === 'en' ? 'ko' : 'en')}
    >
      {lt('navigation.locale-switch')}
    </button >
  );
}

export default function Navigation() {
  return (
    <header>
      <nav>
        <LocaleSwitch />
      </nav>
    </header>
  );
}
