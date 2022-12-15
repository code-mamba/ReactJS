import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Welcome from './Welcome';
import Greet from './Greet';
import Today from './Today';


function App() {
  const Fullname = "Dhanush"
  const element = <h1>Hello {Fullname}</h1>

  const user = {
    firstName: 'Dhanush',
    lastName: 'Baskaran'
  };

  return (
    
    <div className="App">
      <header className="App-header">
      <h1>{Fullname}</h1>
      <p>Hello,{user.firstName}{user.lastName}</p>
      <Welcome name = "Tommy"></Welcome>
      <Welcome name = "Batman"></Welcome>
      <Welcome name = "Superman"></Welcome>
      <Home></Home>
      <Greet></Greet>
      <Today></Today>

      </header>
    
    </div>
  );
}

export default App;
