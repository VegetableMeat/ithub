import { AppProps } from 'next/dist/next-server/lib/router/router'
import React, { FC } from 'react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
