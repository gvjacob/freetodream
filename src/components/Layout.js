import Head from 'next/head';
import cn from 'classnames';
import { useRouter } from 'next/router';

import Meta from '@components/Meta';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';
import { useLocaleTranslation } from '@utils/i18n';

export default function Layout({ children }) {
  const lt = useLocaleTranslation();
  const { locale } = useRouter();

  return (
    <div className={cn('print:w-3/4 print:mx-auto', locale === 'ko' && 'font-hangul')}>
      <Head>
        <meta name="theme-color" content="#2158F4" key="theme-color" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
          key="favicon:small-icon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
          key="favicon:large-icon"
        />
      </Head>

      <Meta
        description={lt('seo.description')}
        image="https://freetodream.ca/img/hanvoice-og.jpg"
      />

      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
