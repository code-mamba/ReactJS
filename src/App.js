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
import Hero from './ErrorBoundaryHero';
import ErrorBoundary from './ErrorBoundary';
import FrParentInput from './ForwardRefParentInput';
import Table from './FragmentTable';
import ClickCounter from './HOCclickCounter';
import Hover from './HocHover';
import Jquery from './otherLibraries';
import PortalDemo from './PortalDemo';
import MyFunct from './jsx-indept';
import { Profiler } from 'react';
import RefDom from './RefsAndDom';
import NameForm from './UnControlledComponents';
const MyComp = React.lazy(()=>import('./calc'))


function App() {

  function onRendercallback(id,phase,actualDuration,baseDuration,startTime,commitTime){
    console.log(id,phase,actualDuration,baseDuration,startTime,commitTime)
  }
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
        </Suspense>
        <UserProvider value = "Dhanush B">
        <ComponentC></ComponentC>
        </UserProvider>
        
       <Hero SuperHero={'Batman'}></Hero>
      <Hero SuperHero={"Superman"}></Hero>
      <ErrorBoundary>
      <Hero SuperHero={"Joker"}></Hero>
      </ErrorBoundary>
      <FrParentInput></FrParentInput>
      <Table></Table>
      <ClickCounter></ClickCounter>
      <Profiler id='Hover' onRender={onRendercallback}>
      <Hover></Hover> 
      </Profiler>
      <Jquery></Jquery>
      <PortalDemo></PortalDemo>
      <MyFunct></MyFunct> */}
      <RefDom></RefDom>
      <NameForm></NameForm>
      </header>

    </div>
  );
}

export default App;
