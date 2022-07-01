import React from 'react'
import styled from 'styled-components'
import GalleryCom from "../components/GalleryCom"
import GalleryImages from "../components/Data/GalleryImages"
import HashNavBar from '../components/HashNavBar'

const Container = styled.div`
    display: flex;
    padding: 8rem 10rem;
    flex-wrap: wrap;  
`


const Gallery = () => {
 
  return (
    <>
      <HashNavBar/>
      <Container>
   
          {
              GalleryImages.map((item) => {
                  return (
                    <GalleryCom item={item} key={item.id }/>
                  )
             }) 
          }
          
      </Container>
       
    </>
  )
}

export default Gallery