import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Nav>
      <Logo>
          <LogoImg src='Images/logo1.png'/>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link to="/" style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><MenuLink>Home</MenuLink></Link>
        <Link to="/About_us" style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><MenuLink>About Us</MenuLink></Link>
        <Link to="/Courses" style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><MenuLink>Courses</MenuLink></Link>
        <Link to="/Contact_us" style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><MenuLink>Contact us</MenuLink></Link>
        <Link to="/Gallery" style={{ textDecoration:"none", color:"black", fontSize: "18px"}}><MenuLink>Gallery</MenuLink></Link>
      </Menu>
      <Right>
        <EnquiryBtn>Enquiry Now</EnquiryBtn>
      </Right>
    </Nav>
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
  background: rgba(209,238,255,0.5);
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
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background: rgba(209,238,255,1);
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
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
const EnquiryBtn = styled.button`
  padding: 8px 20px;
  border: none;
  background: #fbc531;
  border-radius: 5px;
  color: white;
  transition: all 0.3s ease;
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