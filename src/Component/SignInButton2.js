//conditional rerendering 

import React, { useState } from 'react'

const SignInButton2=() => {

   const [isLoggedin,setIsloggedin]= useState(true);
  return (
    <div>
      {isLoggedin ? <button>Logout</button> :  <button>Login</button> }
    </div>
  )
}

export default SignInButton2


