import React from 'react'
import "../css/services.css"
import { MdOutlineSecurity } from "react-icons/md";


const Services = () => {
    
    return (
        <div className='services' id='services'  data-aos="fade-down"  >
            <div className='wrapper-container'>
                <div className='service-card-cont'>
                    <div className='intro-card '>
                        <h2>OUR SERVICES</h2>
                        <h3>We provide IT & Business solutions</h3>
                        <p>Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme.</p>
                        <button>See More</button>

                    </div>
                    <div className='service-card'>
                        <span><MdOutlineSecurity /></span>
                        <h3>Data Security</h3>
                        <p>Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow.</p>
                    </div>
                    <div className='service-card'>
                        <span><MdOutlineSecurity /></span>
                        <h3>Web Development</h3>
                        <p>Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow.</p>
                    </div>
                    <div className='service-card'>
                        <span><MdOutlineSecurity /></span>
                        <h3>Mobile App Development</h3>
                        <p>Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow.</p>
                    </div>

                    <div className='service-card'>
                        <span><MdOutlineSecurity /></span>
                        <h3>Analytic Solutions</h3>
                        <p>Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow.</p>
                    </div>

                    <div className='service-card'>
                        <span><MdOutlineSecurity /></span>
                        <h3>Digital Marketing</h3>
                        <p>Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow.</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Services