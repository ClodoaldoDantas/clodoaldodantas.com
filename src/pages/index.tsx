import Head from 'next/head'
import { NextPage } from 'next'

import Navbar from '@/components/Navbar/Navbar'
import { Container } from '@/components/Container/Container'
import { Hero } from '@/components/Hero/Hero'
import { Qualifications } from '@/components/Qualifications/Qualifications'
import { TechStack } from '@/components/TechStack/TechStack'
import { WorkExperiences } from '@/components/WorkExperiences/WorkExperiences'

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
        <TechStack />
        <WorkExperiences />
      </Container>
    </>
  )
}

export default Home
