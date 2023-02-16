import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from 'react'
import { useRouter } from "next/router";

export const Language = React.createContext<string | undefined>("es")

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const {locale} = router



  return (
    <Language.Provider value={locale}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </Language.Provider>
    
  );
}
