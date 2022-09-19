import '../styles/globals.scss'
import { AppProps } from 'next/app'
import { CommandBar } from '@/components/CommandBar/CommandBar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommandBar>
      <Component {...pageProps} />
      <Toaster />
    </CommandBar>
  )
}

export default MyApp
