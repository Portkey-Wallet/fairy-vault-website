import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
// import 'antd/dist/antd.css';
import '../styles/globals.less';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import Head from 'next/head';
import { SEO_TDK } from 'constants/homeData';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    /**
     * BUG FIX
     * When using nextjs 11, child application jumps internally, and the base cannot monitor,
     * will failed to return to the correct child application page when clicking the forward and back buttons of the browser
     * Solving the problem by listening to the popstate event and replacing it with the next route when the address changes
     */
    window.addEventListener('popstate', () => {
      const { href, origin } = window.location;
      router.replace(href.replace(origin, ''));
    });
  }, [router]);

  return (
    <>
      <Head>
        <title>{SEO_TDK.title}</title>
        <meta name="description" content={SEO_TDK.description} />
        <meta name="keywords" content={SEO_TDK.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="Z2UDKiqlN9LZS-WWRYiQ-QFLbxhZ9FB3I5fnh4wBC0I" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
