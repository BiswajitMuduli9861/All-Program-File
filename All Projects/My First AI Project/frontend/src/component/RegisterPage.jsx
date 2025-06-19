import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'

const RegisterPage = () => {
  const [register, setRegister] = useState(true)
  return (
    <div>
      {
        register ? <SignUp SetRegister={setRegister}/> : <Login SetRegister={setRegister}/>
      }
      
      
    </div>
  )
}

export default RegisterPage
