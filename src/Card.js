import React from 'react'
import MyButton from './Button'

function MyCard() {

    const shoot =()=>{

        alert("cliked");
    }

  return (
    <div>
      <MyButton Brand="Ford"/>
      <button onClick={shoot}>Click me</button>

    </div>
  )
}

export default MyCard
