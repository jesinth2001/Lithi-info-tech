import React, { useRef } from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "../css/testimonial.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import bgimage from "../Assets/section-bgimage2.png"
import profile from "../Assets/profile.png"
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { GoStarFill } from "react-icons/go";

const Testimonial = () => {
    const sliderRef=useRef(null);

    const handlePrev =()=>{
        sliderRef.current.swiper.slidePrev();
    }
    const handleNext =()=>{
        sliderRef.current.swiper.slideNext();
    }
    return (
        <div className='testimonial'>
            <div className='client-info'>
                <h2>Client Says</h2>
                <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
                <div>
                    <span onClick={handlePrev}><MdArrowBackIos /></span>
                    <span onClick={handleNext}><MdArrowForwardIos /></span>
                </div>
            </div>
            <div className='testimonial-card-cont' style={{backgroundImage:`url(${bgimage})`}}>
                <div className='testimonial-swiper'>
                    <Swiper
                       
                        slidesPerView={3}
                        ref={sliderRef}
                        spaceBetween={30}
                        autoplay={{ delay: 5000 }}
                        modules={[Pagination,Autoplay]}
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
                        <SwiperSlide className='slider-slider'>
                            <div className='testimonial-clients'>
                               
                                <img src={profile}/>
                                <h5>Name</h5>
                                <div className='ratings'> 
                                <span><GoStarFill/></span>
                                <span><GoStarFill/></span>
                                <span><GoStarFill/></span>
                                <span><GoStarFill/></span>
                                <span><GoStarFill/></span></div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nam quod inventore ullam consectetur facilis nulla nemo iste delectus temporibus?</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slider-slider'>
                        <div className='testimonial-clients'>
                               
                               <img src={profile}/>
                               <h5>Name</h5>
                               <div className='ratings'> 
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span></div>
                               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nam quod inventore ullam consectetur facilis nulla nemo iste delectus temporibus?</p>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className='slider-slider'>
                        <div className='testimonial-clients'>
                               
                               <img src={profile}/>
                               <h5>Name</h5>
                               <div className='ratings'> 
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span></div>
                               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nam quod inventore ullam consectetur facilis nulla nemo iste delectus temporibus?</p>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className='slider-slider'>
                        <div className='testimonial-clients'>
                               
                               <img src={profile}/>
                               <h5>Name</h5>
                               <div className='ratings'> 
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span></div>
                               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nam quod inventore ullam consectetur facilis nulla nemo iste delectus temporibus?</p>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className='slider-slider'>
                        <div className='testimonial-clients'>
                               
                               <img src={profile}/>
                               <h5>Name</h5>
                               <div className='ratings'> 
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span></div>
                               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nam quod inventore ullam consectetur facilis nulla nemo iste delectus temporibus?</p>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className='slider-slider'>
                        <div className='testimonial-clients'>
                               
                               <img src={profile}/>
                               <h5>Name</h5>
                               <div className='ratings'> 
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span>
                               <span><GoStarFill/></span></div>
                               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nam quod inventore ullam consectetur facilis nulla nemo iste delectus temporibus?</p>
                           </div>
                        </SwiperSlide>
                        
                    </Swiper>
            
            </div>
        </div>
    
    </div >
  )
}

export default Testimonial