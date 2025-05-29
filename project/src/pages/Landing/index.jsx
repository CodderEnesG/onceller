import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import About from './About/About'
import Services from './Services/Services'
import Products from './Products/Products'
import Gallery from './Gallery/Gallery'
import ContactUs from './ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'
import Brands from './Brands/Brands'


const Landing = () => {
  return (
    <>
       <Navbar/>
<HeroSection/>
<About/>
<Brands/>
<Services/>
<Products/>
<Gallery/>
<ContactUs/>
<Footer/>


    </>
  )
}

export default Landing