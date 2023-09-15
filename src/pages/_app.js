/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import Script from 'next/script';

import Layout from '@components/Layout';
import '@src/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <script>
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '531447052050002');
      fbq('track', 'PageView');
      `}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=531447052050002&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <Component {...pageProps} />
      <Script src="//embed.typeform.com/next/embed.js" />
    </Layout>
  );
}
