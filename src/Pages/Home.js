import React from 'react'
import CoursesCard from '../components/CoursesCard'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Footer from './Footer'
const Home = () => {
  
  return (
    <>
    <NavBar/>
    <Slider/>
    <CoursesCard />
    <Footer/>
    </>
  )
}


export default Home