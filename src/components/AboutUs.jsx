import React from 'react'
import "../css/about.css"
import about from "../Assets/section-bgimage1.png"
import animationData from "../Assets/animation/aboutus.json"
import Lottie from 'lottie-react'

const AboutUs = () => {
    return (
        <div className='about' data-aos="fade-up">
            <div className='wrapper-container'>
                <section className='about-us'>
                    <div className='about-img-cont'>
                        <img src={about} />
                        {/* <Lottie  style={{width:"80%" ,height:"100%"}} animationData={animationData}/> */}
                    </div>
                    <div className='about-info'>
                        <div>
                        <h2>About Us</h2>
                        <p className='section-title'>Elevate Your Business with Cutting-Edge Web and Mobile Apps</p>
                        <p>
                        Welcome to Lithi InfoTech , where technology meets innovation and reliability. As a leading technology consulting firm, we specialize in delivering affordable consultancy and development services tailored to meet the unique needs of our clients across diverse business verticals.
                        </p>
                        <p>
                        At Lithi InfoTech, we believe in the power of cutting-edge technology to drive impactful solutions. Our dedicated team is proficient in handling a wide array of technologies
                        </p>
                     
                        </div>
                        <div className='btn-cont'>
                        <button className=''>contact us</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutUs