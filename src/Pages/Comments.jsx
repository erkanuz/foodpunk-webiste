import React from 'react'
import { useState } from 'react'
import '../Styles/comments.css'

import {Star} from 'phosphor-react'
import CD from './comm_data'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {EffectCoverflow, Parallax, Autoplay, Pagination, Navigation } from "swiper";

const Comments = () => {
  const [a] = useState(CD);
  return (
    <section className='comments section'>
        <h2 className="ct">Comments from our users</h2>
        <h3 className="cst">every comment is import to us because we care what our customers think</h3>
      <div className="comments_container grid">
      <Swiper
        effect={"coverflow"}
        speed={1500}
        parallax={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        breakpoints = {{
          300: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1281: {
            slidesPerView: 5,
          }
        }}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 20,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Parallax, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        {a.map((x) =>{
          const {id, image, fname, comment} = x;
          return(
            <SwiperSlide className="test_box" key={id}>
            <div className="tec">
            <img src={image} alt="ti" className='t_img' />
            <div className='ss'>
            <li><Star size='26'/></li>
            <li><Star size='26'/></li>
            <li><Star size='26'/></li>
            <li><Star size='26'/></li>
            <li><Star size='26'/></li>
            <li><Star size='26'/></li>
            <li><Star size='26'/></li>
            </div>
            <h3 className='t_name'>{fname}</h3>
            <p className='t_des'>{comment}</p>
            </div>
          </SwiperSlide>
          )
        })}
        </Swiper>
      </div>
    </section>
  )
}

export default Comments