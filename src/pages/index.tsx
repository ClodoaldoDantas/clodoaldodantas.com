import Head from 'next/head'
import { NextPage } from 'next'

import Navbar from '@/components/Navbar/Navbar'
import { Container } from '@/components/Container/Container'
import { Hero } from '@/components/Hero/Hero'
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
        <Navbar />
        <Qualifications />
        <TechStack />
        <WorkExperiences />
        <Education />
        <Recommendations />
      </Container>
    </>
  )
}

export default Home
