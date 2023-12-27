import React, { useEffect, useState } from 'react'

const HookCounterOne = () => {

    const[count,setCount]=useState(0);

   useEffect(()=>{

  document.title = `You clicked ${count} times`;

   },[count])

  return (
    <div>
        <button onClick={ ()=>setCount((prevCount)=>prevCount+1)} >click {count} button times {" "}</button>

    </div>
  )
}

export default HookCounterOne