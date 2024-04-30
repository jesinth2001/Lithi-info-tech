import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

import { useSelector } from 'react-redux'
import { selectAll } from '../store/slices/blogSlices'
import BreadCrumbs from './BreadCrumbs'
import "../css/blogpage.css"
import Contact from './Contact'
import Footer from './Footer'


const BlogPage = () => {
  const {id} =useParams()
  const blogData =useSelector(selectAll)
  console.log("blogData  ",blogData ,"id ",id)
  const [blogs,setBlogs] =useState([])
  const [BreadCrumbsTitle,setBreadCrumbsTitle]=useState("")


   useEffect (()=>{
    const currentBlog = blogData.filter(item => item.id == parseInt(id));
    console.log("currentBlog",currentBlog)
    setBreadCrumbsTitle(currentBlog[0].title)
    setBlogs(currentBlog);
  },[])

 

  return (
    <div>
      <Header/>
      <BreadCrumbs title={BreadCrumbsTitle}/>
      <div className='blog-det'>

      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default BlogPage