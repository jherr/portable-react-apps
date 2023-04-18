import { AppProps } from 'next/app';
import Head from 'next/head';

import { Main } from '@portable-react-apps/pokemon-ui';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Pokemon</title>
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default CustomApp;
