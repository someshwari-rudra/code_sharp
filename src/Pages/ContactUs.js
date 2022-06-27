import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useMemo } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
// import {Map, GoogleApiWrapper} from "google-map-react"
import { GoogleMap, useLoadScript,Marker  } from '@react-google-maps/api';


const Container = styled.div`
  height: auto;
  width: 100%;
  margin: 4rem 0px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`
const MapContainer= styled.div`
  flex: 1;
  padding:0rem 4rem;
`
const Div = styled.div`
 label{
    width: 100%;
    margin-bottom: 10px;

  }
  input{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 9px;
    border: none;
    outline: none;
  }
  button{
    width: 100%;
    border: none;
    border-radius: 10px;
    background: #fbc531;
    padding: 9px 0;
    font-size: 16px;
    margin-top: 15px;
    transition: all 0.3s ease;
    &:hover{
      color: white;
    background:  hsl(217, 54%, 11%);
    }
  }
  textarea{
    width: 100%;
    border: none;
    margin-top: 10px;
    outline: none;
    padding:9px ;
  }
`


const mapStyles = {        
  height: "70vh",
  width: "100%"};

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
        <form action="">
            <Div>
              <label htmlFor="FirstName">First Name</label>
              <input type="text" placeholder='FirstName' />
            </Div>
            <Div>
              <label htmlFor="FirstName">Last Name</label>
              <input type="text" placeholder='Last Name' />
            </Div>
            <Div>
              <label htmlFor="FirstName">Email</label>
              <input type="email" placeholder='Email ID' />
            </Div>
            <Div>
              <label htmlFor="FirstName">Contact Number</label>
              <input type="text" placeholder='Contact Number' />
            </Div>
            <Div>
              <label htmlFor="FirstName">Inquiry Details</label>
              <textarea cols="" rows="4" placeholder='Inquiry Details'></textarea>
            </Div>
            <Div>
              <button>Submit</button>
            </Div>
        </form>

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

export default ContactUs