import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <>
    <div className='sign-container'>
    <h1>Sign Up</h1>
    <form>
        <label className='label-sign'>Name:</label>
        <input className='input-signup' placeholder='Name'/>
         <label className='label-sign'>Age:</label>
        <input className='input-signup' placeholder='Enter your Age'/>
         <label className='label-sign'>Gender:</label>
        <input className='input-signup' placeholder='Enter your Gender'/>
         <label className='label-sign'>Email:</label>
        <input className='input-signup' placeholder='Enter your Email'/>
         <label className='label-sign' >Password:</label>
        <input className='input-signup' placeholder='Enter your Password'/>
         <label className='label-sign'>Qualification:</label>
        <input className='input-signup' placeholder='Enter your Qualification'/>
         <label className='label-sign'>Hobbies:</label>
        <input className='input-signup' placeholder='Enter your Hobbies'/>
         <label className='label-sign'>Addres:</label>
        <input className='input-signup' placeholder='Enter your Address' />
         <label className='label-sign' >PhoneNumber:</label>
        <input className='input-signup' placeholder='Enter your PhoneNumber'/>
        <button className='btn-sign'> Submit</button>
</form>
    </div>
    </>
    
  )
}

export default Signup