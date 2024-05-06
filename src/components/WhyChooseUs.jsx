import React from 'react'
import "../css/chooseus.css"
import img from "../Assets/1.png"
import { Divider } from 'antd'
import { TiTick } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import Lottie from 'lottie-react';
import animationData from "../Assets/animation/whyus.json"
const WhyChooseUs = () => {
    
  return (
    <div className='choose-us' data-aos="fade-down" >
        <div className='wrapper-container'>
            <div className='choose-us-cont'>
                <div className='choose-info'> 
                    <h3 className='title'>Why choose Us</h3>
                    <h3 className='sub-title'>What we promise high quality IT Agency Services</h3>
                    <p className='desc'>Expertise
Our team of certified cloud professionals brings extensive experience and expertise in cloud architecture, deployment, and optimization.</p>
                    <div className='list-info'>
                        <span><TiTick/></span>
                        <span>Expertise</span>
                    </div>
                    <div className='list-info'>
                        <span><TiTick/></span>
                        <span>Security</span>
                    </div>
                    <div className='list-info'>
                        <span><TiTick/></span>
                        <span>Support</span>
                    </div>
                    <Divider style={{borderColor:"rgb(202, 202, 202)"}}/>
                    <div className='choose-us-bottom'>
                    <p className='join-us'>Join our team – come work with us.</p>
                    <span > GET STARTED TODAY <IoIosArrowForward/></span>
                    </div>
                    
                </div>
                <div className='choose-img-cont'>
                     {/* <Lottie  animationData={animationData}/> */}
                     <img src={img}/>
                </div>

            </div>
        
        </div>
    </div>
  )
}

export default WhyChooseUs