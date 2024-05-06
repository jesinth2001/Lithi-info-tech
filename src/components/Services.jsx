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
                        <h3>DAPPS</h3>
                        <p>Empower your business with decentralized applications (DApps) built on cutting-edge blockchain technology. Our expertise in DApp development ensures secure, transparent, and immutable solutions that redefine industry standards. Harness the power of blockchain to create decentralized ecosystems, enabling trustless transactions and revolutionary business models. From concept to deployment, we deliver innovative DApp solutions tailored to your unique requirements, unlocking new possibilities for your business in the decentralized world.</p>
                    </div>
                    <div className='service-card'>
                        <span><MdOutlineSecurity /></span>
                        <h3>Cloud Services</h3>
                        <p>Experience unparalleled scalability, reliability, and performance with our cloud hosting solutions. Whether you're launching a website, deploying a web application, or managing a complex infrastructure. Manage your codebase and collaborate seamlessly with our version control solutions. Whether you prefer Git, Bit, or SVN, we provide robust tools and best practices to streamline development workflows, track changes, and maintain code integrity across projects of any size.</p>
                    </div>
                    <div className='service-card'>
                        <span><MdOutlineSecurity /></span>
                        <h3>Mobile App Development</h3>
                        <p>Empower your business with cross-platform mobile applications developed using React Native. Our expertise ensures seamless performance across iOS and Android platforms, reaching a wider audience with unified experiences.</p>
                    </div>

                    <div className='service-card'>
                        <span><MdOutlineSecurity /></span>
                        <h3>CMS Management</h3>
                        <p>Transform your online presence with WordPress web solutions tailored to your business needs. Our expertise in WordPress development empowers you to create dynamic, customizable websites that resonate with your audience. Navigating a CMS can be challenging, but our team of experts are up to the task. We provide setup, customization, maintenance, and support for popular platforms like WordPress.</p>
                    </div>

                    
                    <div className='service-card'>
                        <span><MdOutlineSecurity /></span>
                        <h3>Data Security</h3>
                        <p>Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services