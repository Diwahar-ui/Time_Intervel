import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='container'>
        <h1>Login</h1>
        <form >
            <label className='labeltext'>Email:</label>
            <input type='email' placeholder='Enter Your Email' />
            <label className='labeltext'>Password:</label>
            <input type='password'  placeholder='Enter Your Password'/>
            <button className='btn' >Login</button>
        </form>
    </div>
  )
}

export default Login