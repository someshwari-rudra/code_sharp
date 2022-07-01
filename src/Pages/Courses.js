import React ,{useState}from 'react'
import { useParams } from "react-router-dom";
import CoursesData from "../components/Data/CoursesData"
import styled from 'styled-components';
import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";
import Footer from "../Pages/Footer"
import HashNavBar from '../components/HashNavBar';
import Modal from '../components/Modal';
import ContactusForm from "../components/ContactusForm"


const Courses = () => {
  let params = useParams();

  const [ShowModal, setShowModal]= useState(false);

  const OpenModal=()=>{
    setShowModal(prev => !prev)
  }
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
                <HashNavBar/>
                 <Container>
                    <ImageContainer>
                      <ImageCircle>
                        <Img src={CurrELe.selected.img} alt="courseImg"></Img>
                      </ImageCircle>
                    </ImageContainer>
                    <CourseContainer>
                        <CourseTitle>{CurrELe.selected.title}</CourseTitle>
                        <ReqBtn onClick={OpenModal}> Request a Call Back </ReqBtn>
                    </CourseContainer>
                    <Modal ShowModal={ShowModal} setShowModal={setShowModal}/>
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
                  <DataContainer>
                    <Accordian>
                    <Course>course Contains</Course>
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
                    </Accordian>
                    <InquiryFormContainer>
                      <Form>
                        <FormTitle>Inquiry Form</FormTitle>
                        <ContactusForm/>
                      </Form>
                    </InquiryFormContainer>
                  </DataContainer>
                </>
            )
        })
    }
    <Footer/>
    </>
  )
}


const Container = styled.div`
    height: 80vh;
    width: 100%;
    background:url("/Images/courses/course_background1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;

@media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    
}
@media (max-width: 768px) {
  height: 100%;
}
@media (max-width: 360px) {
  height: 100%;
}
`
const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
 
    `
const ImageCircle = styled.div`
    width: 100%;
    height: 100%;
    padding: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
    margin-top: 100px;
  }
  @media (max-width: 768px) {
   padding: 3rem 3rem;
  }
  @media (max-width: 360px) {
    padding: 3rem;
  }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`
const CourseContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 1024px) {
    align-items: center;
  }
  
`
const CourseTitle = styled.h1`
    color: hsl(217, 54%, 11%);
    font-size: 45px;
    margin: 1rem 2rem;
    @media (max-width: 1024px) {
    font-size: 40px;
    text-align: center;
  }
  @media (max-width: 512px) {
   font-size: 20px;
   margin: 1rem;
  }
`
const ReqBtn = styled.button`
    width: 40%;
    margin-top: 10px;
    margin-left: 30px;
    padding: 10px ;
    background:  #fbc531;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 18px;
    border-radius: 10px;
    @media (max-width: 1024px) {
    width: 70%;
    margin-bottom: 2rem;
    margin-left: 0px;
  }
  @media (max-width: 512px) {
    width: 70%;
   margin-bottom: 2rem;
  }
`
const SelectedCourse =styled.div`
    width: auto;
    height: auto;
    padding: 3rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr;
  }
  @media (max-width: 512px) {
      padding: 1.5rem;
  }
  @media (max-width: 360px) {
    padding: 1rem;
  }
`
const Description1 =styled.div`
    flex: 1;
    padding: 30px;
    @media (max-width: 1024px) {
     padding: 2rem;
  }
  @media (max-width: 512px) {
      padding: 1rem;
  }
  @media (max-width: 360px) {
    padding: 1rem;
  }
`
const Title =styled.h1`
    font-size: 34px;
    font-weight: 500;
    margin-bottom: 20px;
    color: hsl(217, 54%, 11%);
    @media (max-width: 512px) {
      font-size: 20px;
  }
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
const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    
}
`
const Accordian = styled.div`

`
const InquiryFormContainer = styled.div`
  padding: 3rem;
  @media (max-width: 512px) {
      padding: 1.5rem;
      margin-bottom: 2rem;
  }
  @media (max-width: 360px) {
    padding: 1rem;
  }
`
const Form = styled.div`
padding: 3rem;
border-radius: 20px;
background: #eee;
@media (max-width: 512px) {
      padding: 1.5rem;
  }
  @media (max-width: 360px) {
    padding: 1rem;
  }
 
`
const FormTitle= styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 20px;
  ;
`
const AccordionSection = styled.div`
  background: #fff;
`;

const Container1 = styled.div`
  padding: 3rem;
  width: 100%;
  transition: all 0.4s ease;
  @media (max-width: 512px) {
      padding: 1.5rem;
  }
  @media (max-width: 360px) {
    padding: 1rem;
  }
`;

const Wrap = styled.div`
  background: #eee;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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