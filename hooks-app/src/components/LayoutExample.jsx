import React, { useLayoutEffect, useEffect, useRef } from "react";

export default function LayoutExample() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    // ye run hoga paint hone se pehle
    console.log("useLayoutEffect: box width =", boxRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    // ye paint hone ke baad chalega
    console.log("useEffect: Component painted");
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "skyblue",
          margin: "20px",
        }}
      >
        Box
      </div>
    </div>
  );
}
