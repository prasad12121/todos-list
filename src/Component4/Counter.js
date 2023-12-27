import React, { useState,useEffect } from 'react'

const Counter = () => {

    const[count,setCount]=useState(0);
    const[calculations,setCalculations]=useState(0);

    useEffect(()=>{

        setCalculations(() =>count*2);

    },[count])


  return (
    <> 
    <p>{count}</p>
    <button onClick={()=>setCount((prev)=>(prev)+1)}>+</button>
    <p>{calculations}</p>
    </> 
  )
}

export default Counter