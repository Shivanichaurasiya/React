import React, { useContext } from "react";
import { CounterProvider } from "./CreateContext";

export function CounterButton(){
    const {increment,decrement,clear}=useContext(CounterProvider)
    return(
        <>
        <button onClick={increment}>Manual Increment</button>
        <button onClick={decrement}> Manual decrement</button>
        <button onClick={clear}>Clear</button>
        <h1>I am from Counter button component</h1>

        </>
    )
        

    
}