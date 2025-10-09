import React, {createContext, useEffect, useState } from "react";

export const CounterProvider=createContext();

export function CreateContext({children}){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount(prev => prev + 1);
        },1000);

        return()=>clearInterval(interval);
    },[])

    const increment=()=> setCount(prev=>prev+1)
    const decrement=()=> setCount(prev=>prev-1)
    const clear=()=>setCount(0);


    return(
        <CounterProvider.Provider value ={{count,increment,decrement,clear}}>
            {children}
        </CounterProvider.Provider>
    )

}