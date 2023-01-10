import React, {useState} from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
  }
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import API from '../../Api'




function UpdateUser() {

  const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const oldMail = useSelector((state) => {
       return state.updateUser
    })

    console.log(oldMail, 'haaaaai')

    const navigate = useNavigate()

    const onSubmit = (e) => {
      e.preventDefault()
      let item = { first_name, last_name, email, oldMail}
      API.post("/update-user", item).then(()=>{
        navigate("/users")
      })
    }

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update user</h1>
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

              <MDBBtn className='mb-4' type='submit' onClick={onSubmit} size='lg'>Update</MDBBtn>
              </form>

            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  )
}

export default UpdateUser