import { useRouter } from 'next/router';

function ({ l, children }) {
  const { locale } = useRouter();

  return l === locale ? children : null;
}

function createTransComponent(locale) {
  return props => <Trans l={locale} {...props} />;
}

export default {
  en: createTransComponent('en'),
  ko: createTransComponent('ko'),
};
