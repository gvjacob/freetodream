import { get } from 'lodash';
import { useRouter } from 'next/router';

import translations from '@src/translations';

export default function useLocaleTranslation() {
  const { locale } = useRouter();
  const lt = id => get(translations, `["${id}"].${locale}`, id);

  return lt;
}
