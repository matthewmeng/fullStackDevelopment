import React from 'react';
import {useState}  from "react";

export default function StateButton(){

    const [count, setCount] = useState('test');

    function handleClick(){
        setCount(count + ' test');
    }

    return (
        <div>
            <button onClick={handleClick}>
                Output: {count}
            </button>
            <button onClick={handleClick}>
                Output: {count}
            </button>
        </div>
            );
}