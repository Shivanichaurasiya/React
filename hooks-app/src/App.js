
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MyComp from './components/MyComp';
import { CreateContext } from './components/CreateContext';
import { CounterDisplay } from './components/CounterDisplay';
import { CounterButton } from './components/CounterButton';
import UseReduser1 from './components/UseReduser1';
import {UseMemohoo} from './components/UseMemohoo';
import LayoutExample from './components/LayoutExample'

import { Box } from './components/Box';

import TodoPage from './components/TodoPage';
import { Theame } from './components/Theame';

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
       
      </CreateContext> */}+

      {/* <UseReduser1></UseReduser1>
      <UseMemohoo></UseMemohoo> */}
      {/* <TodoList/>
      <TodoPage/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/mycomp" element={<MyComp/>}/>
        <Route path="/todo" element={<TodoPage/>}/>
        <Route path="/reduse" element={<UseReduser1/>}/>
        <Route path="/memo" element={<UseMemohoo/>}/>
        <Route path="/context" element={<CreateContext>
         <div style={{textAlign:"center", marginTop:"50px"}}>
          <h1>i am from Counter Context</h1>
           </div>
        <CounterDisplay></CounterDisplay>
        <CounterButton></CounterButton>
        </CreateContext>
        }
      />
      <Route path="/theame" element={<Theame/>}/>
      <Route path="/layout" element={<LayoutExample/>}/>
      <Route path="/box" element={<Box/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
