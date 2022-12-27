import React, { Component } from "react";
class RefDom extends Component{
    onClick=()=>{
        alert(`Hi ${this.firstName.value+this.LastName.value}`)
        console.log(this.firstName.value)
        console.log(this.LastName.value)
        console.log(this.age.value)
    }
    onKeyUp = (target,e) =>{
      if(e.keyCode===13)
      {
        switch(target){
            case 'firstName':
                this.LastName.focus()
                break
            case 'lastName':
                this.age.focus()
                break
            case 'age':
                this.submit.focus()
                break
            case 'submit':
                this.onClick()
             default:
                this.firstName.focus()
        }
    
      }
    }
    render(){
        return(
            <div>
                <div>
                <span>FirstName:</span>
                <input type="text" ref={(input)=>{this.firstName=input}} onKeyUp = {this.onKeyUp.bind(this,'firstName')}></input>
                </div>
                <div>
                    <span>LastName:</span>
                    <input type="text" ref={(input)=>{this.LastName = input}}onKeyUp = {this.onKeyUp.bind(this,'lastName')}></input>
                </div>
                <div>
                    <span>Age:</span>
                    <input type="text" ref={(input)=>{this.age = input}} onKeyUp = {this.onKeyUp.bind(this,'age')}></input>
                </div>
                <div>
                    <button type="submit" value="submit"ref={(input)=>{this.submit = input}} onClick={this.onClick} onKeyUp = {this.onKeyUp.bind(this,'submit')}>Submit</button>
                </div>
            </div>
        )
    }
}
export default RefDom