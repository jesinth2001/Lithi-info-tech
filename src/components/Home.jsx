import React, { useEffect, useRef } from 'react'
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
import Blog from './Blog'
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Welcome to Lithi  Info Tech',
    trigger: '1',
  },
  {
    id: '1',
    message: 'How Can I Assist You?',
    trigger:'2'
  },
  {
    id: '2',
    user:true,
    trigger: '3'
  },{
    id: '3',
    message: 'hi {previousValue},nice to meet you!',
    end:true,
  }

];


const Home = () => {


  return (
    <div>
       <Header/>
       <Landing/>
       <AboutUs />
       <WhyChooseUs />
       <Services/>
       <Development/>
       <Testimonial/>
       <TechnologyStack/>
       <Blog />
       <ContactInfo/>
       <Contact/>
       <ChatBot steps={steps} floating={true}/>
       <Footer/>
       
    </div>
  )
}

export default Home