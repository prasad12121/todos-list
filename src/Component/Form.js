// /useInput Hook
import React from 'react'

import UseInput from "./useInput";


const SignInForm = () => {

    const email = UseInput("");
    const password = UseInput("");

    const submitForm = (event) => {
        event.preventDefault();
        console.log("email", email.value);
        console.log("password", password.value);
      };



  return (
    
    <form onSubmit={submitForm}>
     <h1>Sign in</h1>
     <input  placeholder='Email'  {...email} />
     <input  placeholder='Password' {...password} />

        <button type="submit">Sign in </button>
        </form>
    
  )
}

export default SignInForm