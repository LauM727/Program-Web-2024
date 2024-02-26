import React from 'react';
import { Button } from '../Button/Button';
import { useState } from 'react';

export function Body() {
    const[counter,setCounter]=useState(0)

    const handleClickCounter =(value)=>{
        if(value === 'add'){
            setCounter(counter +1)
        }else if (value === 'subtract' && counter > 0){
            setCounter(counter -1)
        }else if (value === 'reset'){
            setCounter(0)
        }
    }

  return (
    <>
       <h1>Counter</h1>
                <h2>{counter}</h2>
                <Button onClick={() => handleClickCounter('add')}>Add</Button>
                <Button onClick={() => handleClickCounter('reset')}>Reset</Button>
                <Button onClick={() => handleClickCounter('subtract')}>Subtract</Button>

    </>
  );
}
