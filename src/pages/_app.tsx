import '../styles/globals.scss'
import { AppProps } from 'next/app'
import { CommandBar } from '@/components/CommandBar/CommandBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommandBar>
      <Component {...pageProps} />
    </CommandBar>
  )
}

export default MyApp
