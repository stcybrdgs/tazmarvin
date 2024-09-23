//import React from 'react'
import Banner from '../components/Banner'
import BannerHero from '../components/BannerHero'
import Thoughts from '../components/Thoughts'
import Radio from '../components/Radio'
import Music from '../components/Music'
import Merch from '../components/Merch'
import ReachMe from '../components/ReachMe'
import Footer from '../components/Footer'

const MainView = () => {
  return (
    <div className='main-wrapper'>
      <Banner />
      <BannerHero />
      <Thoughts />
      <Radio />
      <Music />
      <Merch />
      <ReachMe />
      <Footer />
    </div>
  )
}

export default MainView

