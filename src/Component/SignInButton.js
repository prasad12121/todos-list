import React, { useState } from 'react'

//conditional rerendering 


const SignInButton=() => {

    const [isLoggedin,setIsloggedin]=useState(true);


    if(isLoggedin){
       return <button>Logout</button>
    }else{
        
      return  <button>Login</button>
    }

}

export default SignInButton
