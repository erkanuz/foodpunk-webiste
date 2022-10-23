import React from 'react'
import { useState } from 'react'
import '../Styles/home.css'

import Data from './Data'

import {Hamburger, Pizza, Cookie, Martini } from 'phosphor-react'
 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination} from "swiper";

import Search from './Search'

const Home = () => {
  const [a] = useState(Data);
  return (
    <section className="home setion">
    <div className="home_container container">

      <div className="Wraper">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        {a.map((x) => {
          const {id, image, text, subtext} = x;
          return(
            <SwiperSlide className="Card" key={id}>
            
              <p className='h_title'>{text}</p>
              <p className='h_subtitle'>{subtext}</p>
              <img src={image} alt="" className='h_img' />
            
            </SwiperSlide>
          )
        })}
        </Swiper>
      </div>

      <div className="pagi">
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
      </div>

      <Search/>

      <div className='fit'>
        <div className="ou">
          <div className="inn"></div>
          <Hamburger size={32} className="hamb"/>
        </div>
        <div className="ou">
          <div className="inn"></div>
          <Pizza size={32} className="hamb i"/>
        </div>
        <div className="ou">
          <div className="inn"></div>
          <Cookie size={32} className="hamb"/>
        </div>
        <div className="ou">
          <div className="inn"></div>
          <Martini size={32} className="hamb"/>
        </div>
      </div>

    </div>
    </section>
  )
}

export default Home