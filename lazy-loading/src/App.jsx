import React ,{lazy,Suspense} from "react";
const About=lazy(()=>import('./components/About'))
const Home=lazy(()=>import('./components/Home'))

function App() {

  return (
    <>
    <div className="bg-red-300">My name is shivani chaurasiya </div>
     <Suspense fallback={<div>Loading About page</div>}>
     <About/>
     <Home/>
     </Suspense>
    </>
  )
}

export default App
