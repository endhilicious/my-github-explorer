import { GithubDataProvider } from '@/context/useGithubData'
import { LoadingProvider } from '@/context/useLoading'
import { ResponsiveProvider } from '@/context/useResponsive'
import { ToastProvider } from '@/context/useToast'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GithubDataProvider>
      <LoadingProvider>
        <ToastProvider>
          <ResponsiveProvider>
            <Component {...pageProps} />
          </ResponsiveProvider>
        </ToastProvider>
      </LoadingProvider>
    </GithubDataProvider>
  )
}
