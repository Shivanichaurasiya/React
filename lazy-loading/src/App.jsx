import React ,{lazy,Suspense} from "react";


const About=lazy(()=>import('./components/About'))


function App() {
  

  return (
    <>
    <div className="bg-red-300">My name is shivani chaurasiya </div>
     <Suspense fallback={<div>Loading About page</div>}>
     <About/>
     </Suspense>
    </>
  )
}

export default App
