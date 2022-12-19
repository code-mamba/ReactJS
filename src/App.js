import logo from './logo.svg';
import './App.css';

function App() {

const people = [
  {id:1, name:"Dhanush"},
  {id:2, name:"Hamza"},
  {id:3, name:"Santhosh"},
  {id:4, name:"Amar"},
  {id:5, name:"Srini"},
  {id:6, name:"mukesh"}
  
]

const Developer = [{
  name:'Dhanush',
  skills:[
    {name:'python'},
    {name:'Java'},
    {name:'Js'}
  ]
},
{
  name:'Hamza',
  skills:[
    {name:'Java'},
  
  ]
},
{
  name:'Santhosh',
  skills:[
    {name:'python'},
    {name:'Java'},
    {name:'Js'},
    {name:'React'}
  ]
}
]

const numbers = [1,2,3,4]
const double = numbers.map(num=>
  num*2
)

  return (
    <div className="App">
      <header className="App-header">
      <h1>React Js List and Keys</h1>

    <ul>
      {
      people.map(data =>(
        <li key = {data.id}>{data.name}</li>
      ))
      
      }

    </ul>
    <div>
      {Developer.map((Dev,index)=>(
        <div key = {index}>
          <h1>{Dev.name} Skills</h1>
          <div>
            {Dev.skills.map((skill,index)=>(
              <li key={index}>{skill.name}</li>
            ))}
          </div>
        </div>
        ))}

        <div>
          
        </div>
     </div>
     <div>
     <ul>
      <h1>Numbers</h1>
      {numbers.map(num =>(
            <li>{num}</li>
          ))}</ul>
      
     </div>
     <div>
      <h1>Number Doubled</h1>
      {double.map(num=>(
        <li>{num}</li>
      ))}
      
     </div>
          
      </header>
    </div>
  );
}

export default App;
