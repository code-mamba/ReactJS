import logo from './logo.svg';
import './App.css';
import Form from './FomsDec-19';
import Form2 from './Forms2Dec-19';
import Calculator from './LiftingStateUp';
import Toggle from './HandleClicks';
import SignupDialogueBox from './Composition';
import React, { Suspense } from 'react';
import { UserProvider } from './userContext';
import ComponentC from './ComponentC';

const MyComp = React.lazy(()=>import('./calc'))


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
         {/* <Form></Form>
        <Form2></Form2>
        <Calculator></Calculator>  
        
         <SignupDialogueBox></SignupDialogueBox>
        <Toggle></Toggle>

        <Suspense fallback = {<div>Loading...</div>}> 
        <MyComp></MyComp>
        </Suspense> */}
        <UserProvider value = "Dhanush B">
        <ComponentC></ComponentC>
        </UserProvider>
       
      
        
      </header>
    </div>
  );
}

export default App;
