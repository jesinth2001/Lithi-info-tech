import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'

import { useSelector } from 'react-redux'
import { selectAll } from '../store/slices/blogSlices'
import BreadCrumbs from './BreadCrumbs'
import "../css/blogpage.css"
import Contact from './Contact'
import Footer from './Footer'
import { Divider } from 'antd'


const BlogPage = () => {
  const {id} =useParams()
  const blogData =useSelector(selectAll)
  console.log("blogData  ",blogData ,"id ",id)
  const [blogs,setBlogs] =useState([])
  const [BreadCrumbsTitle,setBreadCrumbsTitle]=useState("")
  const [activeBlog,setActiveBlog]=useState(false)
  const nav =useNavigate()

 

   useEffect (()=>{
    const currentBlog = blogData.filter(item => item.id == parseInt(id));
    console.log("currentBlog",currentBlog)
    setBreadCrumbsTitle(currentBlog[0].title)
    setBlogs(currentBlog);
    window.scrollTo(0, 0);
    setActiveBlog(false)
  },[activeBlog])

  const handleBlogRecent =(id)=>{
    nav(`/blog-details/${id}`)
    setActiveBlog(true)
  }
  console.log(blogs)

 
 

  return (
    <div className='blogpage-main'>
      <Header blog={true}/>
      <BreadCrumbs title={BreadCrumbsTitle}/>
      <div className='blog-det'>
         {
          blogs.map((blogs)=>{
            return (<div className='blog-cont-blogpage'>
              <img src={blogs.img}/>
              <div className='blogpage-info'>
              <h4 className='blogpage-info-blog'>{blogs.name}
              <span>|</span>{ new Date(blogs.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</h4>
              <Divider style={{borderColor:" rgb(219, 219, 219",margin:"10px 0px",borderWidth:"2px"}}/>
              <p>{blogs.description}</p>
              </div>
            

            </div>)
          })
          
         }
               <div className='recent-blog'>
                <div className='recent-blog-list'>
                  <h3>Recent Posts</h3>
                  {
                    blogData.slice(-3).reverse().map((i)=>{
                      return(<ul>
                        <li onClick={()=>{handleBlogRecent(i.id)}}>{i.title}</li>
                     
                      </ul>)
                    })
                  }
                </div>
               </div>
      </div>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default BlogPage