import React, {useRef } from 'react'
import styled,{ css } from 'styled-components'
import { MdClose } from 'react-icons/md';
import { Formik, Form,Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2'
 
// import Aos from 'aos'
// import "aos/dist/aos.css"

const Background = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  position:fixed;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
   width: 100%;
   height: 100vh;
}
@media (max-width: 568px) {
  width: 100vw;
  
}
@media (max-width: 360px) {
  
}
`;

const ModalWrapper = styled.div`
  width: 480px;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.4);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 1rem 2rem;

@media (max-width: 1024px) {
   width: 400px;
}
@media (max-width: 568px) {
  width: 300px;
  
}
@media (max-width: 360px) {
  
}
 
`;
const Title =styled.h1`
 text-align: center;
    font-weight: 400;
    font-size: 30px;
    color:  hsl(217, 54%, 11%);
    margin-bottom: 20px;
    @media (max-width: 568px) {
    font-size: 20px;
}
`



const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: #576574;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


const Div=styled.div`
  position: relative;
  label{
    width: 10%;
    margin: 10px 0;
  }
 p{
  color:red;
  margin-bottom:10px;
  margin-top: 3px;
 }
  button{
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    background: rgb(55, 55, 55);
    font-size: 1rem;
    color: #fff;
    font-weight: 400;
    cursor: pointer;
  }
`
const Input = styled(Field)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  width: 50%;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;

  &:focus,
  &:active {
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`;
  const FormContainer = styled.div`
 

`

const Modal = ({ShowModal,setShowModal}) => {

  
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };



const InitialValues={
  name:"",
  Email:"",
  Courses:"",
  ContactNo:"",
  InquiryDetails:""

}

const ValidateSchema = yup.object().shape({
name:yup.string().required("Name is Required")
.matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed. ")
.min(6,"Name is Too Short"),
Email:yup.string().required("Email is required").email("Invalid Email"),
Courses:yup.string().required("Course is required"),
ContactNo:yup.string().required("Contact No. is required")
.matches(
  /^[6-9][0-9]{9}$/,
  "Contact number is not valid"
),
InquiryDetails:yup.string().required("Inquiry Details is required")



})

const handleSubmit=(data)=>{
  console.log(JSON.stringify(data, null, 2));
 
        let formData = new FormData();
        formData.append('name', data.name)
        formData.append('Email', data.Email)
        formData.append('ContactNo', data.ContactNo)
        formData.append('Courses', data.Courses)
        formData.append('InquiryDetails', data.InquiryDetails)
 
        axios({
            method: 'post',
            url: 'http://localhost/code_sharp/Inquiry.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log(response)
            setShowModal(false)
            Swal.fire('we will contact you soon!',response.data.data , 'success');
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
}

  return (
    <>
    {
        ShowModal ? (
            <Background  onClick={closeModal} ref={modalRef}>
                <ModalWrapper ShowModal={ShowModal}>
                  <Title>Enquiry Form</Title>
                  <Formik
         initialValues={InitialValues}
         validationSchema={ValidateSchema}
         onSubmit={handleSubmit}>
          {({

          errors,
          touched,
        }) => {
          return (
            <>
          <FormContainer>
          <Form>
                    <Div>
                      <Input 
                      name="name" 
                      type="text" 
                      component="input" 
                      valid={touched.name && !errors.name}
                      error={touched.name && errors.name}
                      placeholder="Enter Name" />
                      <p><ErrorMessage name="name" /></p>
                    </Div>
       
                    <Div>
                      <Input
                      name="Email" 
                      type="email"
                      valid={touched.Email && !errors.Email}
                      error={touched.Email && errors.Email}
                      placeholder="Enter Email" />
                      <p><ErrorMessage name="Email"/></p>
                    </Div>
                    <Div>
                      <Input 
                      name="ContactNo" 
                      type="text" 
                      valid={touched.ContactNo && !errors.ContactNo}
                      error={touched.ContactNo && errors.ContactNo} 
                      placeholder="Enter Contact No."/>
                      <p><ErrorMessage name="ContactNo" /></p>
                    </Div>
                    <Div>
                      <Input 
                      name="Courses" 
                      type="text" 
                      component="select"
                      valid={touched.Courses && !errors.Courses}
                      error={touched.Courses && errors.Courses}>
                        <option value="" disabled>--select Course--</option>
                        <option value="C C++ Programming">C C++ Programming</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Game Development">Game Development</option>
                        <option value="Tally + Accounting">Tally + Accounting</option>
                        <option value="Live Projects">Live Projects</option>
                        <option value="Other">Other</option>
                      </Input>
                      <p><ErrorMessage name="Courses" /></p>
                    </Div>
                    <Div>
                      <Input  
                      name="InquiryDetails" 
                      type="text"
                      component="textarea"
                      row="4"
                      placeholder="Inquiry Details"
                      valid={touched.InquiryDetails && !errors.InquiryDetails}
                      error={touched.InquiryDetails && errors.InquiryDetails} />
                      <p><ErrorMessage name="InquiryDetails" /></p>
                    </Div>
                    <Div>
                      <button type="submit">Register</button>
                    </Div>
                  </Form>
          </FormContainer> 
          </>      
           );
          }}
      </Formik>
                <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
                </ModalWrapper>
            </Background>
        ) :null
    }
    </>
  )
}

export default Modal