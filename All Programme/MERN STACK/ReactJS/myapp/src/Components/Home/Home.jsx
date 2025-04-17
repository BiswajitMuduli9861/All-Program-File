import React from 'react'
import CardRotater from './CardRotater'
import AnimatedFarm from './AnimatedFarm'
import HeroComponent from './HeroComponent'
import Footer from './Footer'
import Equipment from './Equipment'
import AddCow from '../AddCow'
const Home = () => {
  return (
    <>
      <AnimatedFarm/>
      <HeroComponent/>
  
      <CardRotater/>
      <Equipment/>
      <Footer/>
      <AddCow/>
    </>
  )
}

export default Home
