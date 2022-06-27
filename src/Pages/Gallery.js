import React from 'react'
import styled from 'styled-components'
import GalleryCom from "../components/GalleryCom"
import GalleryImages from "../components/Data/GalleryImages"

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;  
`
const Title = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 500;
  margin: 3rem 0;
  font-size: 34px;
  &::after{
    content: "";
    width: 10%;
    border-bottom: 2px solid  #fbc531;
  }

`

const Gallery = () => {
 
  return (
    <>
      <Title id='Gallery'>Our Gallery</Title>
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