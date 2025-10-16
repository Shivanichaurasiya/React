import React, {useState, useEffect } from "react";

export function Theame(){
    const [darkMode,steDarkMode] = useState(false);

    useEffect(()=>{
        const saveMode = localStorage.getItem('darkMode')
        if(saveMode === 'true'){
            steDarkMode(true)
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('darkMode',darkMode)
    },[darkMode])

    return(
        <div style={{
            backgroundColor:darkMode ? '#222' : '#fff',
            color:darkMode?'#fff' : '#222',
            height:'100vh',
            textAlign:'center',
            paddingTop:'50px'
        }}>

            <h1>{darkMode? 'Dark' :'Light'} Mode </h1>
            <button onClick={()=>steDarkMode(prev =>! prev)}>Toggle Mode</button>
        </div>
    )
}