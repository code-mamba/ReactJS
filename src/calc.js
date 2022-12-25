import React from "react";
import { add } from "./Math";


class Calc extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstNumber:"",
            secondNumber:"",
            result:""
        }
       
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.addinputs = this.addinputs.bind(this)
        
    }

    handleChange1(e){
         this.setState({firstNumber: e.target.value})
        
    }
    handleChange2(e){
        this.setState({secondNumber:e.target.value})
    }
    addinputs(){
       
        var number1 = this.state.firstNumber
        var number2 = this.state.secondNumber
        var num1 = parseInt(number1)
        var num2 = parseInt(number2)
        var sum = add(num1,num2)
        console.log(sum)
        this.setState({result:sum})
        console.log(this.state.result)

    }

     render(){
        return(
            <div>
            <h1>Sum of the two numbers</h1>
            <input type='text' value ={this.state.firstNumber} onChange = {this.handleChange1} placeholder = "Enter the first number"></input>
            <input type='text' value = {this.state.secondNumber} onChange = {this.handleChange2} placeholder = "Enter the second number"></input>
            <button type="button" onClick={this.addinputs}>Sum</button>
            <p>{this.state.result}</p>
            </div>
        )
     }
}
export default Calc