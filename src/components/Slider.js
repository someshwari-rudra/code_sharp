import React, { useState } from 'react'
import SliderData from "./Data/SliderData"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper';

import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Modal from './Modal';


const Slider = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  const [ShowModal,setShowModal]= useState(false);
  const OpenModal=()=>{
    setShowModal(prev=>!prev)
  }
  return (
    <>
     <Container>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar,Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
   }}
      onSlideChange={() => console.log('slide change')}

    >
        {
        SliderData.map((CurrEle)=>{
          return(
            <>
            <SwiperSlide key={CurrEle.id}>
            <SwiperContainer>
              <SwiperContent>
                  <SwiperHeader>{CurrEle.title} </SwiperHeader>
                  <SwiperParagraph>{CurrEle.description}</SwiperParagraph>
                  <SwiperButton onClick={OpenModal}>Enquire Now</SwiperButton>
              </SwiperContent>
              <ImageContainer>
                <SwpiperImage src={CurrEle.image} alt="Swiper Img1"/>
              </ImageContainer>
            </SwiperContainer>
          </SwiperSlide>
            <div ref={navigationPrevRef} />
            <div ref={navigationNextRef} />
          </>
          )
        })
      }
    </Swiper>
    <Modal ShowModal={ShowModal} setShowModal={setShowModal}/>
    </Container>
    </>
  )
}


const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient(120deg, rgba(245,187,22,0.1),rgba(209,238,255,1) );
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: -2;
    
`
const SwiperContainer= styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    grid-template-columns:1fr;

  }

 
`
const SwiperContent= styled.div`
    grid-column: 1/2;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 6rem 4rem;
    box-sizing: border-box;
    @media (max-width: 700px) {
      order:2;
     padding: 0rem 2rem;
    grid-column: 1/2;
  }
    
`
const SwiperHeader= styled.h1`
    padding:10px 20px ;
    font-size: 34px;
    color: hsl(217, 54%, 11%);
    font-weight: 600;
    @media (max-width: 1080px) {
      padding:5px 10px ;
      font-size: 24px;
  }
  @media (max-width: 870px) {
      font-size: 18px;
    
  }
  @media (max-width: 700px) {
      margin-top: 20px;
  }

`
const SwiperParagraph= styled.p`
  color: #252525;
  padding: 10px 20px;
  text-align:justify ;
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 1080px) {
      padding:5px 10px ;
      font-size: 14px;
    
  }
  @media (max-width: 870px) {
      font-size: 12px;
    
  }
`
const SwiperButton= styled.button`
    margin: 1rem 1.5rem;
    padding: 10px 40px;
    border: none;
    background:#fbc531;
    border-radius: 5px;
    color: white;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover{
    color: white;
    background:  hsl(217, 54%, 11%);
  }
  @media (max-width: 568px) {
    margin-bottom: 2rem ;
}
`
const ImageContainer= styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    order: 1;
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    padding: 2rem;
    margin-top: 3rem;
    
  }
 
`
const SwpiperImage= styled.img`
    width: 100%;
    height: 100%;
    padding: 0rem 5rem;
    object-fit: fill;
    @media (max-width: 1080px) {
      padding: 0rem 3rem;
    
  }
  @media (max-width: 870px) {
    padding: 0rem 1rem;
    
  }
 
`

export default Slider