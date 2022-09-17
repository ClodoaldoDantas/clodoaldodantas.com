import Head from 'next/head'
import { NextPage } from 'next'

import { Container } from '@/components/Container/Container'
import { Hero } from '@/components/Hero/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clodoaldo Dantas</title>
      </Head>

      <Container>
        <Hero />
      </Container>
    </>
  )
}

export default Home
