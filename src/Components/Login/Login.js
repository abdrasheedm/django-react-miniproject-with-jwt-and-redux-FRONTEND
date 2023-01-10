import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import API from '../../Api'




function Login() {

 

  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      console.log("error")
    } else {
      API.post("/login", {
        email : email,
        password : password,
      })
      .then((res) => {
        {
          if (res.data.login === true){
            if (res.data.admin === true) {
              navigate("/users")
      
              } else {
                navigate("/")
              }
              dispatch({
                type : 'user',
                payload : res.data
            })

          } else{
            console.log(res.data.message)
          }
        }
        
      })
    }
  }
  // const handleSubmit = async (e: SyntheticEvent) => {
  //   e.preventDefault();

  //   await fetch('http://127.0.0.1:8000/api/login',{
  //     method:'POST',
  //     headers:{'Content-Type':'application/json',
  //             Accept:'application/json'},
  //     credentials: 'include',
  //     body:JSON.stringify({
  //       email,
  //       password
  //     })
  //   })
  // }


  const value = useSelector((state) => {
    return state.value
  })
  const dispatch = useDispatch()

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

              <form onSubmit={handleSubmit}>
                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' value={email} onChange={(e) => setEmail(e.target.value)} size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' value={password} onChange={(e) => setPassword(e.target.value)} size="lg"/>

              <MDBBtn className="mb-4 px-5" type='submit' color='dark' size='lg'>Login</MDBBtn>
              </form>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;