import React, { useRef } from 'react'
import "../css/header.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Divider } from 'antd';
import Logo from '../Assets/lithi.4ac8e094.png'
import { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";



const Header = ({blog}) => {
 
   const [navbar,setNavbar]=useState(false)
   const [isOpen,setIsOpen]=useState(false)
   const menuRef=useRef(null);



  const changeBackground = ()=>{
 
  window.scrollY>=10?setNavbar(true):setNavbar(false)
  }
  window.addEventListener('scroll',changeBackground)


  const showMenu = ()=>{
    if(isOpen)
    {
    menuRef.current.classList.add('open-nav');
    setIsOpen(false);
    }
    else{
    menuRef.current.classList.remove('open-nav');
    setIsOpen(true); 
    }
}
 
const handleMenu =() =>{
    menuRef.current.classList.remove('open-nav');
}
  return (
    <div className={navbar||blog?"header active":"header"}>
        <div className='wrapper-container'>
            <div className='contact-info'style={{ display: navbar || blog ? "none" : "flex" }}>
                <h4>9344399421 | sample@domain.com</h4>
                <ul className='icon-list'>
                    <li><a href='#'> <FaFacebookF/></a></li>
                    <li><a href='#'> <FaTwitter/></a></li>
                    <li><a href='#'> <FaLinkedinIn/></a></li>
                    <li><a href='#'><IoLogoWhatsapp/></a></li>
                </ul>
            </div>
            <Divider style={{borderColor:"rgb(184, 184, 184)",margin:"0px 0px",display: navbar || blog ? "none" : "flex" }}/>
            <div className='nav'>
               <div className='logo-cont'>
                   <img src={Logo}/>
               </div>
               <div className='navigation-bar'>
                    <ul className='nav-list' ref={menuRef}>
                        <li><a  href='/#' onClick={handleMenu} >Home</a></li>
                        <li><a href='/#about' onClick={handleMenu} >About</a></li>
                        <li><a href='/#services'  onClick={handleMenu}>Services</a></li>
                        <li><a href='/#blogs'  onClick={handleMenu}>Blog</a></li>
                        <li><a href='/#contact' onClick={handleMenu}>Contact</a></li>
                    </ul>
                    <span style={{color:navbar?"":"white"}}><FaBarsStaggered onClick={showMenu}/></span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Header