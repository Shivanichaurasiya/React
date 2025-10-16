import React, { useLayoutEffect, useRef, useState } from "react";

export function Box() {
    const boxRef = useRef()
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => {
        const boxHeight = boxRef.current.getBoundingClientRect().height;
        setHeight(boxHeight);
    }, []);

    return (
        <div>
            <div ref={boxRef} style={{padding: '50px', backgroundColor: 'yellow'}}>
                Measure my Height sumit 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, hic maxime numquam dicta dolorem quasi omnis excepturi, facilis possimus magni velit voluptates eaque accusamus distinctio accusantium fugit praesentium amet cupiditate.
            </div>
            <p>Height is: {height}px</p>
        </div>
    )
}