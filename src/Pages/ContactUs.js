import React,{useEffect} from 'react'
import styled  from 'styled-components'
import { useMemo } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import ContactusForm from "../components/ContactusForm"
// import {Map, GoogleApiWrapper} from "google-map-react"
import { GoogleMap, useLoadScript,Marker  } from '@react-google-maps/api';


const mapStyles = {        
  height: "70vh",
  width: "100%",
 
  '@media (maxWidth: 768px)': {
    margin: ' 0rem 4rem',
  },
  '@media (maxWidth: 360px)': {
    display: 'none',
  },
};

// const defaultCenter = {
//   lat: 21.17587385717746, lng: 72.87210795690892
// }

const ContactUs = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Container id='Contactus'>
      <FormContainer data-aos="fade-right">
        <h1>Contact Us</h1>
        <ContactusForm/>
      </FormContainer>
      <MapContainer data-aos="fade-left">
        <Map/>
      </MapContainer>
    </Container>

  );
}


function Map() {
  const center = useMemo(() => ({ lat:  21.17587385717746, lng:  72.87210795690892 }), []);

  return (
    <GoogleMap zoom={10} center={center}  mapContainerStyle={mapStyles}>
      <Marker title='Raj Empires' position={center} />
    </GoogleMap>
  );
}




const Container = styled.div`
  height: auto;
  width: 100%;
  margin: 4rem 0px;
  display: flex;
  box-sizing:border-box;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    justify-content: center;
    align-items: center;
}
`
const FormContainer= styled.div`
  flex: 1;
  padding: 2rem 4rem;
  margin-left: 4rem;
  background-color: #eee;
  h1{
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
    color: hsl(217, 54%, 11%);
  }
  @media (max-width: 1024px) {
    padding: 1rem 2rem;
    margin-left: 2rem;
    
}
@media (max-width: 768px) {
  padding: 1rem 2rem;
  margin: 2rem;
  overflow: hidden;
  
}
@media (max-width: 360px) {
  padding: 1rem 1rem;
  margin: 1rem;
  overflow: hidden;
}

`
const MapContainer= styled.div`
  flex: 1;
  width: 70%;
  padding: 3rem;
  @media (max-width: 1024px) {
    width: 90%;
  overflow-x: hidden;
    
}
@media (max-width: 768px) {
  padding: 0rem 0rem;
  margin-left: 2rem;
  overflow: hidden;
  
}
@media (max-width: 450px) {
  padding: 0rem 0rem;
  margin-left: 5rem;
  width: 50%;
  overflow: hidden;
}
@media (max-width: 368px) {
  padding: 0rem 0rem;
  margin-left: 5rem;
  width: 50%;
  overflow: hidden;
}
`


export default ContactUs