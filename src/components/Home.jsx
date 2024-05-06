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
    message: 'Welcome to Lithi Info Tech! How can I assist you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'technical_support', label: 'Technical Support', trigger: 'technical_support' },
      { value: 'product_info', label: 'Product Information', trigger: 'product_info' },
      { value: 'purchase_assistance', label: 'Purchase Assistance', trigger: 'purchase_assistance' },
      { value: 'feedback', label: 'Leave Feedback', trigger: 'feedback' },
    ],
  },
  {
    id: 'technical_support',
    message: 'Are you experiencing any technical issues with our products? Please describe the problem, and I\'ll do my best to help.',
    trigger: 'options',
  },
  {
    id: 'product_info',
    message: 'Are you interested in learning more about our products or services? Feel free to ask about specific features or pricing.',
    trigger: 'options',
  },
  {
    id: 'purchase_assistance',
    message: 'Looking to make a purchase? Let me guide you through our product offerings and help you find the right solution for your needs.',
    trigger: 'options',
  },
  {
    id: 'feedback',
    message: 'We value your feedback! Please share any comments, suggestions, or concerns you have about TechSolutions products or services.',
    trigger:'user_feedback',
  },
  {
    id:'user_feedback',
    user:true,
    trigger:'reply_feedback',
  },{
    id:'reply_feedback',
    message: 'We value your feedback! Thank you for your feedback',
    end:true
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