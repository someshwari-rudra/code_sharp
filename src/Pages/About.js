import React,{useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"


const Container = styled.div`
  height: auto;
  width: 100%;
  margin-top: 1rem;


`
const Title = styled.h1`
    text-align: center;
    font-size: 35px;
    font-weight: 400;
    padding-top: 4rem;
    color:  hsl(217, 54%, 11%);
    @media (max-width: 1080px) {
      font-size: 24px;
  }
  @media (max-width: 870px) {
      font-size: 24px;
  }
   
`
const TitleBloder = styled.h2`
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    color:  hsl(217, 54%, 11%);
    margin-bottom: 2rem;
    @media (max-width: 1080px) {
      font-size: 24px;
      margin-bottom: 1rem;
  }
  @media (max-width: 870px) {
      font-size: 24px;
      padding:20px ;
  }
`
const AboutUsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem 5rem;
    @media (max-width: 1080px) {
      display: grid;
      grid-template-columns: 1fr;
      padding: 1rem;
  }
  @media (max-width: 870px) {
      font-size: 14px;
      order: 2;

    
  }
`
const Content = styled.div`
  flex: 1;
  padding: 5rem 8rem 5rem 5rem;
  border-radius: 10px 50% 50% 10px;
  h1{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 14px;
  }
  p{
    text-align: justify;
    font-size: 14px;
  }
  @media (max-width: 1080px) {
      font-size: 18px;
      padding: 1rem;
      order: 2;
  }
  @media (max-width: 870px) {
      font-size: 14px;
      order: 2;

    
  }
  /* @media (max-width: 700px) {
      margin-top: 20px;
  } */
  
`
const ImageCotainer = styled.div`
  flex: 1;
  position: relative;
  img{
    width: 100%;
    height: 100%;
    margin-left: 30px;
    border-radius: 50%;
    padding: 20px;
    @media (max-width: 1080px) {
      border-radius: 50%;
      margin-left: 0%;
  }
  @media (max-width: 870px) {
    border-radius: 0%;
    
  }
  }
`
const Circle = styled.div`
    height: 300px;
    width: 300px;
    position: absolute;
    top: -10%;
    left: 50%;
    background: linear-gradient(rgba(102, 16, 242, 0.2),rgba(111, 66, 193, 0.3));
    border-radius: 50%;
    z-index: -1;
    @media (max-width: 1080px) {
      display: none;
  }
  @media (max-width: 870px) {
      font-size: 14px;
      order: 1;
    
  }
`
const Circle2= styled.div`
     height: 40px;
    width: 40px;
    position: absolute;
    top: -10%;
    left: 0%;
    background: linear-gradient(rgba(102, 16, 242, 0.2),rgba(111, 66, 193, 0.3));
    border-radius: 50%;
    z-index: -1;
    @media (max-width: 1080px) {
      display: none;
  }
`
const Circle3 = styled.div`
     height: 250px;
    width: 250px;
    position: absolute;
    top: 50%;
    left: 10%;
    background: linear-gradient(rgba(102, 16, 242, 0.2),rgba(111, 66, 193, 0.3));
    border-radius: 50%;
    z-index: -1;
    @media (max-width: 1080px) {
      display: none;
  }
`

const Circle4 = styled.div`
     height: 40px;
    width: 40px;
    position: absolute;
    top: 90%;
    left: 100%;
    background: linear-gradient(rgba(102, 16, 242, 0.2),rgba(111, 66, 193, 0.3));
    border-radius: 50%;
    z-index: -1;
    @media (max-width: 1080px) {
      display: none;
  }
`

const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
   <>
   <Title data-aos="fade-up">Welcome to the</Title>
        <TitleBloder data-aos="fade-up"> #1 IT Training & Placement Company in Surat</TitleBloder>
    <Container id='AboutUs'>
        <AboutUsContainer>
          <Content data-aos="fade-right">
            <h1>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h1>
            <p>Code Sharp IT Academy is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
          </Content>
          <ImageCotainer data-aos="fade-left">
              <img src="/Images/AboutUs.jpg" alt="about us" />
              <Circle></Circle>
              <Circle2></Circle2>
              <Circle3></Circle3>
              <Circle4></Circle4>
          </ImageCotainer>
        </AboutUsContainer>
    </Container>
   </>
  )
}

export default About