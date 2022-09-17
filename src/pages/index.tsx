import { Container } from '@/components/Container/Container'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clodoaldo Dantas</title>
      </Head>

      <Container>Home Page</Container>
    </>
  )
}

export default Home
