import Head from 'next/head'
import { NextPage } from 'next'

import { Container } from '@/components/Container/Container'
import { Hero } from '@/components/Hero/Hero'
import { Navbar } from '@/components/Navbar/Navbar'
import { Qualifications } from '@/components/Qualifications/Qualifications'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clodoaldo Dantas</title>
      </Head>

      <Container>
        <Hero />
        <Navbar />
        <Qualifications />
      </Container>
    </>
  )
}

export default Home
