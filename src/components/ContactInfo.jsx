import React from 'react'
import "../css/contactinfo.css"
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaMobile } from "react-icons/fa6";


const ContactInfo = () => {
  return (
    <div className='get-in-touch'>
        <div className='wrapper-container'>
        <h1>Get in touch</h1>
        <p>Lets discuss your next project</p>
        <div className='info-cont'>
            <div className='info-card'> 
                <span className='floating-icon'><FaLocationDot/></span>
                <h3>Our Location</h3>
                <p>301 The Greenhouse, Custard Factory,
London, E2 8DY.</p>
            </div>

            <div className='info-card'> 
                <span className='floating-icon'><MdMail/></span>
                <h3>Mail Enquires</h3>
                <p>support@domainname.com</p>
            </div>

            
            <div className='info-card'> 
                <span className='floating-icon'><FaMobile/></span>
                <h3>Mobile Number</h3>
                <p>+91 9344399421</p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default ContactInfo