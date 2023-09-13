import { ThemeProvider } from 'next-themes'
import Layout from '@/components/UI/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UiContextProvider from '@/store/ui-context'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <UiContextProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </UiContextProvider>
    </ThemeProvider>
  )
}
