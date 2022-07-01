import React from 'react'
import styled from "styled-components"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Container = styled.div`
    flex: 1;
    margin: 5px;
    position: relative;
    background: black;
    min-width: 340px;
    height: 60vh;
`
const ImageLoading = styled(LazyLoadImage)`
  object-fit: cover;
`


const GalleryCom = ({item}) => {
   
  return (
    
    <Container key={item.id}>
      <ImageLoading 
       alt="images"
       effect="blur"
       src={item.image} 
       height="100%"
       width="100%"
        className='GalleryImage'
      />
</Container>
  )
}

export default GalleryCom