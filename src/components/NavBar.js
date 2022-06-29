import React, {useState} from 'react'
import styled ,{keyframes}from 'styled-components'
import {HashLink as Link } from 'react-router-hash-link'
import Modal from './Modal';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ShowModal, setShowModal]= useState(false);

  const OpenModal=()=>{
    setShowModal(prev => !prev)
  }
  
  return (
    <>
    <Nav>
      <Logo>
          <LogoImg src='/Images/logo1.png'/>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link to="/" style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><MenuLink>Home</MenuLink></Link>
        <Link to="#AboutUs" smooth style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><MenuLink>About Us</MenuLink></Link>
        <Link to="#Courses" smooth style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><MenuLink>Courses</MenuLink></Link>
        <Link to="#Gallery" smooth style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><MenuLink>Gallery</MenuLink></Link>
        <Link to="#Contactus" smooth style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><MenuLink>Contact Us</MenuLink></Link>
      </Menu>
      <Right>
        <EnquiryBtn onClick={OpenModal}>Enquire Now</EnquiryBtn>
      </Right>
    </Nav>

    <Modal ShowModal={ShowModal} setShowModal={setShowModal}/>
    </>
  )
}

// =============================================================styling of component starts=======================================================

const Nav = styled.div`
   display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 10vh;
  background: white;
  position: absolute;
  z-index: 9999;
  padding: 0 5rem;
  top: 0;
  left: 0;
  right: 0;
  background:#c7ecee;
  @media (max-width: 768px) {
    padding:0  1rem ;
  }
`;

const MenuLink = styled.div`
  padding: 1rem 1.3rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  color: hsl(217, 54%, 11%);
  &:hover {
    color: #7b7fda;
  }

`;

const Logo = styled.div`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const LogoImg = styled.img`
    width: 10rem;
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: white;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background:linear-gradient(rgba(102, 16, 242, 1),rgba(111, 66, 193, 1));
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 820px) {
    display: flex;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonAnim =  keyframes` 
  0%{transform: scale(1);}
  100% {transform: scale(1.2);}
`
const EnquiryBtn = styled.button`
  padding: 8px 20px;
  border: none;
  background: #fbc531;
  margin-bottom: 10px;
  border-radius: 5px;
  color: white;
  transition: all 0.3s ease;
  animation: ${ButtonAnim} 1.5s alternate infinite ease-in;;
  cursor: pointer;
  &:hover{
    color: white;
    background:  hsl(217, 54%, 11%);;
  }
  @media (max-width: 975px) {
    display: none;
  }
`
// =============================================================styling of component Ends=======================================================

export default NavBar