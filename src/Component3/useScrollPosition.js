import React, { useEffect, useState } from 'react'


const useScrollPosition = () => {
   const [scrollPosition,setScrollPosition]=useState(0);

   useEffect(()=>{
        const updatePosition =()=>{
        setScrollPosition(window.scrollTo(20, 50));        
    }

    window.addEventListener("scroll",updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll",updatePosition);
   },[]);

    return scrollPosition
}

export default useScrollPosition
