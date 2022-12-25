import React, { Component } from "react";
import { UserConsumer } from "./userContext";
class ComponentF extends Component{
    render(){
        return(
          <UserConsumer>
            {
                (UserName) =>{
                 return(   
                 <h1>Hello {UserName}</h1>
                 )
                }
            }
          </UserConsumer>
        )
    }
}
export default ComponentF