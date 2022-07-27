import type { AppProps } from 'next/app'
import { NextPageWithLayout } from '../types';
import Layout from '../components/Layout';
import '../styles/globals.css'
import 'react-day-picker/dist/style.css';
import { ThemeProvider } from '@material-tailwind/react';

// this should give a better typing
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
  // adjust accordingly if you disabled a layout rendering option
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp