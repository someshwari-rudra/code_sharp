import React ,{useState}from 'react'
import { useParams } from "react-router-dom";
import CoursesData from "../components/Data/CoursesData"
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";
import Footer from "../Pages/Footer"


const Courses = () => {
  let params = useParams();

  let SelecteCourse = CoursesData.filter((CurrELe)=>{
      return CurrELe.title === params.CourseTitle
  });

  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <>
    {
        SelecteCourse.map((CurrELe)=>{
            return(
                <>
                 <Container>
        <ImageContainer>
            <ImageCircle>
            <Img src='/Images/sliders/slider2.png'></Img>
            </ImageCircle>
        </ImageContainer>
        <CourseContainer>
            <CourseTitle>{CurrELe.selected.title}</CourseTitle>
            <ReqBtn>Request a Call Back</ReqBtn>
        </CourseContainer>
    </Container>
        <SelectedCourse>
            <Description1>
                <Title>{CurrELe.selected.overview.heading1}</Title>
                <Desc>{CurrELe.selected.overview.description1}</Desc>
            </Description1>
            <CourseImageContainer>
                <CourImg src={CurrELe.image} alt='course Image'/>
            </CourseImageContainer>
        </SelectedCourse>
        <Course>course Contains</Course>
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container1>
             <Wrap onClick={() => toggle(1)} >
                  <h1>{CurrELe.selected.CourseCover.CoueseTitle1.Title1}</h1>
                  <span>{clicked === 1 ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
                </Wrap>
                {clicked === 1 ? (
                  <Dropdown>
                    <ul>
                        <li>{CurrELe.selected.CourseCover.CoueseTitle1.title1Details1}</li>
                        <li>{CurrELe.selected.CourseCover.CoueseTitle1.title1Details2}</li>
                        <li>{CurrELe.selected.CourseCover.CoueseTitle1.title1Details3}</li>
                        <li>{CurrELe.selected.CourseCover.CoueseTitle1.title1Details4}</li>
                    </ul>
                  </Dropdown>
                ) : null}
                 <Wrap onClick={() => toggle(2)} >
                  <h1>{CurrELe.selected.CourseCover.CoueseTitle2.Title1}</h1>
                  <span>{clicked === 2 ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
                </Wrap>
                {clicked === 2 ? (
                  <Dropdown>
                  <ul>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle2.title1Details1}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle2.title1Details2}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle2.title1Details3}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle2.title1Details4}</li>
                  </ul>
                </Dropdown>
                ) : null}
    
                <Wrap onClick={() => toggle(3)} >
                  <h1>{CurrELe.selected.CourseCover.CoueseTitle3.Title1}</h1>
                  <span>{clicked === 3 ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
                </Wrap>
                {clicked === 3 ? (
                  <Dropdown>
                  <ul>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle3.title1Details1}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle3.title1Details2}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle3.title1Details3}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle3.title1Details4}</li>
                  </ul>
                </Dropdown>
                ) : null}
    
                <Wrap onClick={() => toggle(4)} >
                  <h1>{CurrELe.selected.CourseCover.CoueseTitle4.Title1}</h1>
                  <span>{clicked === 4 ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
                </Wrap>
                {clicked === 4 ? (
                  <Dropdown>
                  <ul>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle4.title1Details1}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle4.title1Details2}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle4.title1Details3}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle4.title1Details4}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle4.title1Details5}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle4.title1Details6}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle4.title1Details7}</li>
                  </ul>
                </Dropdown>
                ) : null}
    
                 <Wrap onClick={() => toggle(5)} >
                  <h1>{CurrELe.selected.CourseCover.CoueseTitle5.Title1}</h1>
                  <span>{clicked === 5 ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
                </Wrap>
                {clicked === 5 ? (
                  <Dropdown>
                  <ul>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle5.title1Details1}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle5.title1Details2}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle5.title1Details3}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle5.title1Details4}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle5.title1Details5}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle5.title1Details6}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle5.title1Details7}</li>
                  </ul>
                </Dropdown>
                ) : null}
    
                <Wrap onClick={() => toggle(6)} >
                  <h1>{CurrELe.selected.CourseCover.CoueseTitle6.Title1}</h1>
                  <span>{clicked === 6 ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
                </Wrap>
                {clicked === 6 ? (
                  <Dropdown>
                  <ul>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle6.title1Details1}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle6.title1Details2}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle6.title1Details3}</li>
                      <li>{CurrELe.selected.CourseCover.CoueseTitle6.title1Details4}</li>
                  </ul>
                </Dropdown>
                ) : null}
        </Container1>
      </AccordionSection>
    </IconContext.Provider>
                </>
            )
        })
        
    }
    <Footer/>
    </>
  )
}


const Container = styled.div`
    margin-top: 10vh;
    height: 60vh;
    background:url("/Images/breadcrumbs.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    `
const ImageCircle = styled.div`
    width: 45%;
    height: 80%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`
const CourseContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const CourseTitle = styled.h1`
    color: white;
    font-size: 45px;
`
const ReqBtn = styled.button`
    width: 30%;
    margin-top: 20px;
    padding: 10px;
    background:  #fbc531;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 18px;
    border-radius: 10px;
`
const SelectedCourse =styled.div`
    width: auto;
    height: auto;
    padding: 3rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Description1 =styled.div`
    flex: 1;
    padding: 30px;
`
const Title =styled.h1`
    font-size: 34px;
    font-weight: 500;
    margin-bottom: 20px;
    color: hsl(217, 54%, 11%);
`
const Desc =styled.p`
    text-align: justify;
`
const CourseImageContainer =styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CourImg =styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
`
const Course = styled.h1`
padding-left: 4rem;
font-weight: 500;

`
const AccordionSection = styled.div`
  display: flex;
  padding: 3rem;
 
  height: 120vh;
  margin-bottom: 10rem;
  background: #fff;
`;

const Container1 = styled.div`
  position: absolute;
  width: 50%;
`;

const Wrap = styled.div`
  background: #eee;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #95a5a6;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1rem;
    font-weight: 400;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #eee;
  width: 100%;
  height: auto;
  display: flex;
  padding-left: 30px;
  flex-direction: column;
  justify-content: center;
ul{
    padding: 10px;
   
}
  li {
    color: #2c3e50;
    font-size: 1rem;
    padding: 10px;
  }
`;

export default Courses