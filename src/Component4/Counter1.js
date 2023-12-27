import React from 'react'

const Counter1 = () => {
    useEffect(() => { 
        let isCancelled = false; 
        const changeHandler = async () => { 
        await timeout(1000); 
        if (!isCancelled) { 
        alert(`A name was changed: ${value}`); 
        } 
        }; 
        
        changeHandler(); 
        //The cleanup function is called when useEffect is called again or on unmount. 
        return () => { 
        isCancelled = true; 
        }; 
       }, [value]); 

       
  return (
    <div>Counter1</div>
  )
}

export default Counter1