import React from 'react'
import "../css/techno.css"
import { FaReact } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
const TechnologyStack = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
          ]
      };
  return (
    <div>
        <div className='techno' data-aos="fade-up">
            <div className='wrapper-container'>
                 <div className='techno-cont'>
                 <h1>Technology Stack We Work On</h1>
                 <div className='slider-cont'>
                    <Slider {...settings}>
                      <div className='techno-stack react'   >
                        <FaReact />
                        <h4>React</h4>
                      </div>

                      <div className='techno-stack node' >
                        <FaNodeJs/>
                        <h4>Node</h4>
                      </div>

                      <div className='techno-stack mongodb' >
                        <DiMongodb/>
                        <h4>Mongo Db</h4>
                      </div>

                      
                      <div className='techno-stack express' >
                        <FaNodeJs/>
                        <h4>Express</h4>
                      </div>

                      
                      <div className='techno-stack mysql'  >
                        <SiMysql/>
                        <h4>My Sql</h4>
                      </div>

                      <div className='techno-stack angular'  >
                        <FaAngular/>
                        <h4>Angular</h4>
                      </div>

                      <div className='techno-stack word-press'  >
                        <FaWordpress/>
                        <h4>Wordpess</h4>
                      </div>

                      <div className='techno-stack postgres'>
                        <BiLogoPostgresql/>
                        <h4>Postgres Sql</h4>
                      </div>

                    </Slider>
                
                   
                   </div>

                 </div>
            </div>
        </div>
    </div>
  )
}

export default TechnologyStack