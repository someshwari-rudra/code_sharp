import React from 'react'
import Gallery from "react-photo-gallery";
import NavBar from '../components/NavBar'
import {photos} from '../components/Data/photos'
import styled  from 'styled-components';
import Footer from './Footer';

const Container = styled.div`
    margin: 8rem 2rem;
 @media (max-width: 1024px) {
    
}
@media (max-width: 768px) {
   margin:5rem 1rem;
}
@media (max-width: 360px) {
 margin: 10rem 1rem;
}
`


const GalleryPage = () => {

 
  return (
    <>
    
      <NavBar/>
        <Container>
          <Gallery photos={photos}  />
      </Container>
      <Footer/>

    </>
  )
}

export default GalleryPage