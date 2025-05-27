import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import About from './About/About'
import Services from './Services/Services'
import Products from './Products/Products'

const Landing = () => {
  return (
    <>
       <Navbar/>
<HeroSection/>
<About/>
<Services/>
<Products/>

    </>
  )
}

export default Landing