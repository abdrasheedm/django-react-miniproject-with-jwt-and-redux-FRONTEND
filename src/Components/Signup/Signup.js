import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow, 
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import API from '../../Api'
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [userId, setUserId] = useState(null) 
    const [users, setUsers] = useState([])
  
    const navigate = useNavigate()

  useEffect(() => {
    refreshUsers()
  }, [])


  const refreshUsers = () => {
    API.get("/")
    .then((res) => {
      setUsers(res.data)
    })
    .catch(console.error)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let item = { first_name, last_name, email, password}
    API.post("/signup/", item).then(()=>{
      navigate("/signin")
    })
  }



  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h1>
              <form onSubmit={onSubmit}>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='First Name' id='form1' type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)} className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Last Name' id='form1' type='text' value={last_name} onChange={(e) => setLastName(e.target.value)} className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Email' id='form2' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <MDBBtn className='mb-4' type='submit' onClick={onSubmit} size='lg'>Register</MDBBtn>
              </form>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Signup;