import React from 'react';
import {useState}  from "react";

export default function StateSyncButton(){

    const [count, setCount] = useState('test');

    function handleClick(){
        setCount(count + ' test');
    }

    return(
        <div>
            <h1>Counters that update together</h1>
            <ChildButton count={count} onClick={handleClick}/>
            <ChildButton count={count} onClick={handleClick}/>
        </div>

    )
}

function ChildButton({count,onClick}) {
    return (
        <button onClick={onClick}>
            Output: {count}
        </button>
    );
}