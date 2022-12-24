import { get } from 'lodash';
import { useRouter } from 'next/router';

import translations from '@src/translations';

export function useLocaleTranslation() {
  const { locale } = useRouter();
  const lt = id => get(translations, `["${id}"].${locale}`, id);

  return lt;
}

export function useLocaleSwitch() {
  const router = useRouter();

  return locale =>
    router.push({ route: router.pathname, query: router.query }, router.asPath, { locale });
}
