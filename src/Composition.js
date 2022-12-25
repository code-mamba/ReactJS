import React from "react";
import Dialogue from "./Dialogue";
class SignupDialogueBox extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {login: ''}
       
    }

    handleChange(e){
            this.setState({login:e.target.value})
    }
    handleSubmit(){
        alert(`Welcome ${this.state.login}`)
    }

    render(){
        return(
            <Dialogue title = "Welcome" message="How should we refer to you?">
                    <input value = {this.state.login} onChange = {this.handleChange}></input>
                    <button onClick={this.handleSubmit}>Submit</button>
            </Dialogue>
        )
    }
}
export default SignupDialogueBox