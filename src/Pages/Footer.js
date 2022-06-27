import React from 'react'
import styled from 'styled-components'
import { FaInstagram ,FaLinkedin} from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { AiFillPhone,AiOutlineMail } from "react-icons/ai";

const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    align-items: center;
    padding: 30px 20px;
    background:  hsl(217, 54%, 11%);
    color: white;
    justify-content: center;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
    
  }
`
const Left = styled.div`
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    padding: 20px;
   
`
const Logo = styled.img`
    width: 50%;
`
const Desc = styled.p`
    margin: 20px 0px;
    text-align: justify;
    font-weight: 300;
    color: #c8d6e5;
    font-size: 14px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`
const Center = styled.div`
    grid-column: 3/4;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 20px;
    font-weight: 500;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    font-weight: 200;
    cursor: pointer;
    color: #c8d6e5;
`
const ListItem = styled.li`
    width: 50%;
     margin-bottom: 13px;
     text-decoration: dashed;
     font-size: 14px;
`

const Right = styled.div`
     grid-column: 4/5;
     padding: 20px;
    
`
const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #c8d6e5;
  cursor: pointer;
  font-size: 14px;
`;



const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo src="/Images/logo1.png"/>
              <Desc> We provide training for IT & Computer's Courses by Professional IT experts who are deeply engaged with the IT industry.</Desc>
              <SocialContainer>
                  <SocialIcon color="3B5999"><BsFacebook/></SocialIcon>
                  <SocialIcon color="E4405F"><FaInstagram/></SocialIcon>
                  <SocialIcon color="55ACEE"><FaLinkedin/></SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
              <Title>Usefull Links</Title>
              <List>
                <ListItem>Home</ListItem>
                <ListItem>Courses</ListItem>
                <ListItem>About Us</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>Gallery</ListItem>
              </List>
          </Center>
          <Right>
                <Title>Contact</Title>
                <ContactItem>
                <GoLocation size="1.5rem"  style={{marginRight:"20px"}}/> 3-7,3rd Floor Raj Empire Complex,Maharana Pratap Chowk,Godadara,Surat,Gujarat-395010.
                </ContactItem>
                <ContactItem>
                <AiFillPhone size="1.5rem" style={{marginRight:"10px"}}/> +91- 6355 441 271
                </ContactItem>
                <ContactItem>
                <AiOutlineMail size="1.5rem" style={{marginRight:"10px"}} />codesharpacademy@gmail.com
                </ContactItem>
          </Right>
    </Container>
  )
}

export default Footer