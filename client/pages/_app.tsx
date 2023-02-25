import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../layouts/Layout";
import {SessionProvider} from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider session={pageProps.session}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </SessionProvider>
  )
}
