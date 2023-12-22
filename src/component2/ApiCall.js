import React,{useState,useEffect} from 'react'

const ApiCall = () => {

const [advice, setAdvice] = useState("");



{/* 

useEffect(() => {
  const url = "https://api.adviceslip.com/advice";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json.slip.advice);
      setAdvice(json.slip.advice);
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchData();
}, []);

*/}

useEffect(()=>{
    const url = "https://api.adviceslip.com/advice";


    const fetchData =async() => {
        try {

              const response =await fetch(url);
              const json  =await response.json();
              console.log(json.slip.advice);
              setAdvice(json.slip.advice);

            
        } catch (error) {
            console.log("error",error)
        }

    }

    fetchData();

},[] );

return (


    <h1>{advice}</h1>

);
};

export default ApiCall;