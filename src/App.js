import logo from './logo.svg';
import './App.css';
import Form from './FomsDec-19';
import Form2 from './Forms2Dec-19';
import Calculator from './LiftingStateUp';
import Toggle from './HandleClicks';

import SignupDialogueBox from './Composition';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Form></Form>
        <Form2></Form2>
        <Calculator></Calculator>  */}
        
        <SignupDialogueBox></SignupDialogueBox>
        <Toggle></Toggle>
        
      </header>
    </div>
  );
}

export default App;
