// import React from 'react'
// import { useState,useMemo } from 'react';

// const useMemohoo = () => {
//     const [numbers] =useState([1,2,3,4,5,6,7,8,9,10])
//     const [filterOn , setFilterOn] = useState(true);

//     const evenNumbers = useMemo(()=>{
//         console.log("calculating even numbers")
//         return numbers.filter(n => n%2 === 0)
//     },[numbers])
//   return (
//     <div>
//     <button onClick={()=>setFilterOn(!filterOn)}>
//         Toggle filter(currently {filterOn ? "ON" : "OFF"})
//     </button>
//     <ul>
//         {(filterOn ? evenNumbers : numbers)?.map(num =>(
//             <li key={num}>{num}</li>
//         ))}
//     </ul>
      
//     </div>
//   )
// }

// export default useMemohoo

import React, { useState, useMemo } from 'react';

const UseMemohoo = () => {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [filterOn, setFilterOn] = useState(true);

  const evenNumbers = useMemo(() => {
    console.log("calculating even numbers");
    return numbers.filter(n => n % 2 === 0);
  }, [numbers]);

  return (
    <div>
      <button onClick={() => setFilterOn(!filterOn)}>
        Toggle filter (currently {filterOn ? "ON" : "OFF"})
      </button>
      <ul>
        {(filterOn ? evenNumbers : numbers)?.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemohoo;
