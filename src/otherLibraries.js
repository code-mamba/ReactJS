import React, { Component } from "react";
import $ from 'jquery'
class Jquery extends Component{
    constructor(props){
        super(props)
        this.state = {
            store:''
        }
    }
    componentDidMount = ()=>{
        let _this = this
        $('button').on('click',function(){
            _this.setState({store: Math.random()})
        })
    }
    render(){
        return(
            <div>
                <h2>Using Jquery in React</h2>
                <h2>{this.state.store}</h2>
                <button>Test button</button>
            </div>
        )
    }
}
export default Jquery
