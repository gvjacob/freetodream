import { useRouter } from 'next/router';
import { get } from 'lodash';
import translations from './translations';

export default function useLocaleTranslation() {
  const { locale } = useRouter();
  const lt = id => get(translations, `["${id}"].${locale}`, id);

  return lt;
}
