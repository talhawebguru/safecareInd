import React from 'react'
import Quality from '../components/home/Quality'
import NewsLetter from '../components/home/NewsLetter'
import { About } from '../components/about/About'
import WhoWeAre from '../components/about/WhoWeAre'
import OurMissionOurVision from '../components/about/OurMissionOurVision'
import KeyStrength from '../components/about/KeyStrength'

const page = () => {
  return (
    <>
    <About/>
    <WhoWeAre/>
    <OurMissionOurVision/>
    <KeyStrength/>
    <Quality/>
    <NewsLetter/>
    </>
  )
}

export default page