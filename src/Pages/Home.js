import React from 'react'
import CoursesCard from '../components/CoursesCard'
import Slider from '../components/Slider'
import NavBar from '../components/NavBar'
import About from './About'
import Footer from './Footer'
import ContactUs from './ContactUs'
// import Gallery from './Gallery'
const Home = () => {
  
  return (
    <>
    <NavBar/>
    <Slider/>
    <About/>
    <CoursesCard />
    {/* <Gallery/> */}
    <ContactUs/>
    <Footer/>
    </>
  )
}


export default Home