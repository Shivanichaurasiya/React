import { useRef } from "react";

function MyComp(){
    const inputRef=useRef();
    const eleRef=useRef();

    function focusInput(){
        inputRef.current.focus();
    }
    function colorChange(){
        eleRef.current.focus();
    }
    return(
        <>
        <input ref={inputRef}/>
        <button onClick={focusInput}>Focus Input</button>
        <h1 ref={eleRef} style={{textAlign:"center"}}>Go to box</h1>

        <div style={{width:"300px",height:"300px",backgroundColor:"yellow", textAlign:"center" ,marginTop:"20px"}}>
            i am bos element

        </div>
        <button onClick={colorChange}>Color Change</button>
        </>
    );
}

export default MyComp;