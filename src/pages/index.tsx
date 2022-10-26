import Head from 'next/head'
import { NextPage } from 'next'

import { Container } from '@/components/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'

import { Qualifications } from '@/components/Qualifications/Qualifications'
import { TechStack } from '@/components/TechStack/TechStack'
import { WorkExperiences } from '@/components/WorkExperiences/WorkExperiences'
import { Education } from '@/components/Education/Education'
import { Recommendations } from '@/components/Recommendations/Recommendations'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clodoaldo Dantas</title>
      </Head>

      <Container>
        <Hero />
        <Qualifications />
        <TechStack />
        <WorkExperiences />
        <Education />
        <Recommendations />
        <Footer />
      </Container>
    </>
  )
}

export default Home
