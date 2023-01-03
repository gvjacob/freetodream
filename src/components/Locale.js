import { useRouter } from 'next/router';

function LocaleContent({ l, children }) {
  const { locale } = useRouter();

  return l === locale ? children : null;
}

function createTransComponent(locale) {
  // eslint-disable-next-line react/display-name
  return props => <LocaleContent l={locale} {...props} />;
}

const Locale = {
  en: createTransComponent('en'),
  ko: createTransComponent('ko'),
};

export default Locale;
