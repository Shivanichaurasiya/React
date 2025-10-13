
import './App.css';
import MyComp from './components/MyComp';

import { CreateContext } from './components/CreateContext';
import { CounterDisplay } from './components/CounterDisplay';
import { CounterButton } from './components/CounterButton';
import UseReduser1 from './components/UseReduser1';

function App() {
  return (
    
      <>
      {/* <MyComp></MyComp>
      <CreateContext >
        <div style={{textAlign:"center", marginTop:"50px"}}>
          <h1>i am from Counter Context</h1>
           </div>
        <CounterDisplay></CounterDisplay>
        <CounterButton></CounterButton>
       
      </CreateContext> */}

      <UseReduser1></UseReduser1>
      </>


      
    
  );
}

export default App;
