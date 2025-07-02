import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
     const [erroremail,errorsetEmail] = useState("");
      const [errorpassword,errorsetPassword] = useState("");

     const handleSubmit = (e)=>{
      const data = {email :email,
                     password:password
                     }
      console.log("data",data)
      if(!email){
      errorsetEmail("please fill the box");
       }
       if(!password){
      errorsetPassword("please fill the box");
       }
       console.log(data,"data")
       }
    

  return (
    <div className='container'>
        <h1>Login</h1>
            <label className='labeltext'>Email:</label>
            <input className='input-login' type='text' placeholder='Enter Your Email' value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
            <p className='err'>{erroremail}</p>
            <label className='labeltext'>Password:</label>
            <input className='input-login' type='password'  placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <p className='err'>{errorpassword}</p>
            <button className='btn' type='submit' onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login