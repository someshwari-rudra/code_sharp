import React from 'react'
import styled from "styled-components"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Container = styled.div`
    flex: 1;
    margin: 5px;
    position: relative;
    background: black;
`
const ImageLoading = styled(LazyLoadImage)`
  object-fit: cover;
  width: 100px;
  height: 100px;
`


const GalleryCom = ({item}) => {
   
  return (
    
    <Container key={item.id}>
      <ImageLoading 
       alt="images"
       effect="blur"
       src={item.image} 
    
      />
</Container>
  )
}

export default GalleryCom