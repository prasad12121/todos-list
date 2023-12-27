import React from 'react'
import useInput from './useInput'

const Form2 = () => {

    const email= useInput("");
    const password= useInput("");

   const submitForm =(event)=>{
      
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);

   }

  return (

        <form onSubmit={submitForm}>
        <h1>Sign in</h1>
        <input placeholder='email' {...email} />
        <input placeholder='password' {...password} />
        <button type="submit">Sign in</button>
        </form>
        
  )
}

export default Form2
