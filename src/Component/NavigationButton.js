import React from 'react';

  

const NavigationButton = (props) => {

    return (
      <button>
        <ul>
    <li> <img src={props.image} alt='' className='test' /><br/>
        <h1>{props.title}</h1>
    </li>
        </ul>
      </button>
     
    );
  };

export default NavigationButton;

