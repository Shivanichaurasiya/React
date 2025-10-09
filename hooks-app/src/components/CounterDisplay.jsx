import React, {useContext} from "react";

import { CounterProvider } from "./CreateContext";

export function CounterDisplay(){
    const {count} =useContext(CounterProvider)

    return(
        <>
        <h2>Count : {count}</h2>
        <h1>i am from CounterDisplay component </h1>
        </>
    )
}