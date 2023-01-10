import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import API from '../../Api'

function Home() {
  const [name, setName] = useState('')
  const token = useSelector((state) => {
    return state.jwtAccess
  })

  const email = useSelector((state) => {
    return state.email
  })

  useEffect(() => {
    
    API.post('/user',{
      token,
      email
    })
    .then((res) => {
      setName(res.data.name)
    })
    
  },[token, email])

  return (
    <div>
        <h1 className='container text-center mt-5 pt-5'>Hi {name ? <span>{name}</span> : 'Guest' } </h1>
    </div>
  )
}

export default Home