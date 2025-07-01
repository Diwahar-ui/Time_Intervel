import React from 'react'
import { useState } from 'react';

const UseState = () => {
    const [count,setjj]=useState(1);
    const change = ()=>{
        setjj(count=1);
    }
    // let color = "red"

  return (
    <>
    <h1>my {count} color </h1>
    <button onClick={change}>change color</button>
    </>
  )
}

export default UseState