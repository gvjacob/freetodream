import Head from 'next/head';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#2158F4" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
