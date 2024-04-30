import React from 'react'
import Header from './Header'
import Landing from './Landing'
import AboutUs from './AboutUs'
import TechnologyStack from './TechnologyStack'
import Contact from './Contact'
import Footer from './Footer'
import ContactInfo from './ContactInfo'
import WhyChooseUs from './WhyChooseUs'
import Services from './Services'
import Testimonial from './Testimonial'
import Development from './Development'


const Home = () => {
  return (
    <div>
       <Header/>
       <Landing/>
       <AboutUs/>
       <WhyChooseUs/>
       <Services/>
       <Development/>
       <Testimonial/>
       <TechnologyStack/>
       <ContactInfo/>
       <Contact/>
       <Footer/>
       
    </div>
  )
}

export default Home