import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import '../css/blog.css'

import { FaTags } from "react-icons/fa6";
import { IoGitNetworkSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { selectAll } from '../store/slices/blogSlices';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

    const sliderRef = useRef(null);
    const getBlog =useSelector(selectAll)||[]
    const navigate =useNavigate()

    const handleClick = (id) =>{
        navigate(`/blog-details/${id}`)
    }

    return (
        <div className='blog-page'>
            <h1 className='blog-tit'>Our Blogs</h1>
            <p className='blog-sub'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aliquid.</p>
            <Swiper
                slidesPerView={3}
                ref={sliderRef}
                spaceBetween={30}
                autoplay={{ delay: 5000 }}
                modules={[Pagination, Autoplay,Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiperTest"
            >
            {
                getBlog.map((blogs)=>{
                    return(
                        <SwiperSlide className='blog-slider'>
                        <div className='blog-clients'>
    
                            <div className='blog-image'>
                                <img src={blogs.img} />
                            </div>
                           <div className='blog-header'>
                           <div className='blog-date'>
                            <span>{(blogs.date).split('/')[0]}</span>
                            <spn>{ new Date((blogs.date).replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2-$1-$3")).toLocaleString('default', { month: 'short' })}</spn>
                           </div>
                            <h5>{blogs.name}</h5>
                           </div>
                             <h3>{blogs.title}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum minima delectus iusto, veniam quo dolore sit incidunt exercitationem sed? Explicabo modi veniam ipsam magni optio, nihil reiciendis iusto earum.</p>
                            <div className='blog-logo-cont'>
                                <span className='blog-logo'><FaTags/> <span>blog</span></span>
                                <span className='blog-logo'><IoGitNetworkSharp/> <span>Technology</span></span>
                            </div>
                            <div className='blog-btn'>
                                <button onClick={()=>{handleClick(blogs.id)}}>Read More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                })
            }

                {/* <SwiperSlide className='blog-slider'>
                    <div className='blog-clients'>

                        <div className='blog-image'>
                            <img src={blogImage} />
                        </div>
                       <div className='blog-header'>
                       <div className='blog-date'>
                        <span>18</span>
                        <spn>JAN</spn>
                       </div>
                        <h5>Name</h5>
                       </div>
                         <h3>Blog Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum minima delectus iusto, veniam quo dolore sit incidunt exercitationem sed? Explicabo modi veniam ipsam magni optio, nihil reiciendis iusto earum.</p>

                        <div className='blog-logo-cont'>
                            <span className='blog-logo'><FaTags/> <span>blog</span></span>
                            <span className='blog-logo'><IoGitNetworkSharp/> <span>Technology</span></span>
                        </div>

                        <div className='blog-btn'>
                            <button>Read More</button>
                        </div>
                    </div>
                </SwiperSlide> */}

                {/* <SwiperSlide className='blog-slider'>
                    <div className='blog-clients'>

                        <div className='blog-image'>
                            <img src={blogImage} />
                        </div>
                       <div className='blog-header'>
                       <div className='blog-date'>
                        <span>18</span>
                        <spn>JAN</spn>
                       </div>
                        <h5>Name</h5>
                       </div>
                         <h3>Blog Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum minima delectus iusto, veniam quo dolore sit incidunt exercitationem sed? Explicabo modi veniam ipsam magni optio, nihil reiciendis iusto earum.</p>

                        <div className='blog-logo-cont'>
                            <span className='blog-logo'><FaTags/> <span>blog</span></span>
                            <span className='blog-logo'><IoGitNetworkSharp/> <span>Technology</span></span>
                        </div>

                        <div className='blog-btn'>
                            <button>Read More</button>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default Blog