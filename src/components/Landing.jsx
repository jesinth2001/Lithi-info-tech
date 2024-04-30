import React from 'react'
import "../css/landing.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import img1 from "../Assets/pexels-buro-millennial-1438081.jpg"
import img2 from "../Assets/pexels-buro-millennial-1438072.jpg"


const Landing = () => {
    return (
        <div className='landing'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                autoplay={{ delay: 5000 }}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='silder-div' style={{ backgroundImage: `url(${img1})` }}>
                        <div className='test'>
{/*                     
                            <h1 data-aos="fade-up">Together We Drive An<br/>
                            Unbeatable Experience</h1>
                            
                            <button data-aos="fade-right">get in touch</button> */}
                            </div>
                           
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='silder-div' style={{ backgroundImage: `url(${img2})` }}>
                        <div className='test'></div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Landing