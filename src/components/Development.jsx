import React from 'react'
import "../css/dev.css"
import { FaSearch } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { GrLaunch } from "react-icons/gr";
import { FaLightbulb } from "react-icons/fa6";

const Development = () => {
  return (
    <div className='development'>\
     <div className='wrapper-container'>
         <h2>Our Company's Development Process</h2>
         <div className='dev-card-cont'>
             <div className='dev-card'>
               <span><FaLightbulb/></span>
                <h3>Idea</h3>
                </div>
             <div className='dev-card'>
               <span> <FaSearch/></span>
                <h3>Research</h3>
             </div>
             <div className='dev-card'>
               <span><CgWebsite/></span>
            
                <h3>Design</h3>
             </div>
             <div className='dev-card'>
               <span><IoCodeSlash/></span>
                <h3>Build</h3>
             </div>
             <div className='dev-card'>
               <span> <IoSettings/></span>
               <h3>Test</h3>
             </div>
             <div className='dev-card'>
               <span><GrLaunch/></span>
               <h3>Launch</h3>
             </div>
         </div>
     </div>
    </div>
  )
}

export default Development