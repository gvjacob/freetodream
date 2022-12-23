/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import { useRouter } from 'next/router';

function Title({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} key="title" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="twitter:title" content={title} key="twitter:title" />
    </Head>
  );
}

function Description({ description }) {
  return (
    <Head>
      <meta name="description" content={description} key="description" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="twitter:description" content={description} key="twitter:description" />
    </Head>
  );
}

function Image({ image }) {
  return (
    <Head>
      <meta property="og:image" content={image} key="og:image" />
      <meta property="twitter:image" content={image} key="twitter:image" />
      <meta property="twitter:card" content="summary_large_image" key="twitter:card" />
    </Head>
  );
}

function URL() {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL;
  const { asPath } = useRouter();

  if (!siteURL) {
    return null;
  }

  const url = `${siteURL}${asPath}`;

  return (
    <Head>
      <meta property="og:url" content={url} key="og:url" />
      <meta property="twitter:url" content={url} key="twitter:url" />
    </Head>
  );
}

/**
 * Meta tags for title, description, image, and url with support
 * for Open Graph, Facebook, and Twitter.
 *
 * @param {string} title
 * @param {string} description
 * @param {string} image
 */
export default function Meta({ title, description, image }) {
  /**
   * Meta tags need to be direct children to `Head` for
   * deduplication to work.
   *
   * @see https://nextjs.org/docs/api-reference/next/head
   */
  return (
    <>
      {title && <Title title={title} />}
      {description && <Description description={description} />}
      {image && <Image image={image} />}

      <Head>
        <meta property="og:type" content="website" key="og:type" />
      </Head>

      <URL />
    </>
  );
}
