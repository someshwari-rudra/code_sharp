import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CoursesData from "./Data/CoursesData"
import Aos from 'aos'
import "aos/dist/aos.css"
import { AiOutlineArrowRight } from "react-icons/ai";

const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    padding: 2rem 8rem;
    @media (max-width: 1080px) {
        padding: 2rem 7rem;
  }
  @media (max-width: 870px) {
    padding: 1rem 3rem;
    
  }
  @media (max-width: 480px) {
    padding: 0rem 1rem;
    padding: .5rem 1.5rem;
    
  }
   
`
const Title = styled.h1`
    text-align: center;
    margin-bottom: 25px;
    color:  hsl(217, 54%, 11%);
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    &::after{
        display: flex;
        width: 15%;
        justify-content: center;
        align-items: center;
        content: "";
        border-bottom: 3px solid #db9819;
    }
 
    @media (max-width: 1080px) {
      margin-top: 0rem;
    
  }
`
const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-gap: 35px;
    align-items: stretch;

`
const Card = styled.div`
    background:#fff;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    transition: all 0.3s ease-in;
    &:hover{
    transform: scale(1.1);
  }
`
const CardImage = styled.img`
  max-width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;


`
const CardContent = styled.div`
  padding: 16px 20px 30px;

    
`
const CardTitle = styled.h2`
    color:hsl(217, 54%, 11%);
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        color: #fbc531;
    }
`
const CardBtn = styled.button`
    padding: 9px 30px;
    width: 100%;
    margin-top: 15px;
    background:  #fbc531;
    color: white;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
    color: white;
    background:  hsl(217, 54%, 11%);;
  }
`

const CoursesCard = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <>
    <Container id='Courses'>
        <Title>Courses Offered </Title>
        <CardContainer>
            {
                CoursesData.map((CurrELe)=>{
                    return(
                        <Card key={CurrELe.id} data-aos="fade-up" >
                        <CardImage src={CurrELe.image}/>
                    <CardContent>
                    <Link to={`/Courses/${CurrELe.title}`} style={{ textDecoration:"none", color:"black", fontSize: "18px"}}> 
                        <CardTitle >{CurrELe.title}</CardTitle>
                      </Link>
                      <Link to={`/Courses/${CurrELe.title}`} style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><CardBtn>Know More.. <AiOutlineArrowRight size="1.5rem"/></CardBtn>
                      </Link>
                    </CardContent>
                    </Card>
                    )   
                })
            }
        </CardContainer>
    </Container>
    </>
  )
}

export default CoursesCard