import React from 'react'


interface Props {
name:string;
age:number;
profession:string;
location:string;

}

const WelcomeCard  = (Props:Props) => {
   const {name,age,profession,location} = Props
  return (
    <div>
        <h1>welcome {name}</h1>
        <p>You are {age} years old, work as a {profession} and live in {location}.</p>
        
    </div>
  )
}

export default WelcomeCard 