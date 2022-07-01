import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: auto;
    width: 100%;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    color:  hsl(217, 54%, 11%);
    font-weight: 600;
     display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
      &::after{
        display: flex;
        width: 80%;
        justify-content: center;
        align-items: center;
        content: "";
        border-bottom: 3px solid #db9819;
        @media (max-width: 580px) {
        width: 50%;
      }
    }
      @media (max-width: 580px) {
       
      }
 
`
const ImagesContainer = styled.div`
    width: 60%;
    margin-top: 3rem;
    margin-bottom: 6rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    justify-content: center;
    grid-gap: 35px;
    align-items: stretch;
    align-items: center;
    padding: 2rem;
     @media (max-width: 580px) {
        width: 90%;
         grid-template-columns: repeat(2, 1fr);
         padding: 1rem;
      }
`
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items:center ;
    padding: 1rem;
   
`
const Img = styled.img`
    width: 100%;
    height: 100%;
 `
    

const RecruitmentPartner = () => {
  return (
      <>
          <Container>
              <Title>OUR RECRUITMENT PARTNERS</Title>
              <ImagesContainer>
                  <Image >
                      <Img src='Images/placement Partner/28infotech.png' alt='placement partners'  />
                  </Image>
                   <Image >
                      <Img src='Images/placement Partner/Windex.png' alt='placement partners'  />
                  </Image>
                   <Image >
                      <Img src='Images/placement Partner/placement3.png' alt='placement partners'  />
                  </Image>
                   <Image >
                      <Img src='Images/placement Partner/placement7.png' alt='placement partners'  />
                  </Image>
                   <Image >
                      <Img src='Images/placement Partner/placement6.png' alt='placement partners'  />
                  </Image>
                  
              </ImagesContainer>
          </Container>
          
          
    </>
  )
}

export default RecruitmentPartner