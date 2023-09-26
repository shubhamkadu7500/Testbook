import React, { Component } from 'react'


export default class lifecycleDemo extends Component {
    constructor(){
        super();
        this.staet={
          counter:0
        }
        console.log("inside constructor");
    };

    componentDidMount(){
        console.log("component did mount");
    }
    componentDidUpdate(){
      console.log("component did update");
    }
  render() {
    console.log("inside render");

    return (
      <div>
        <h1>lifecycleDemo</h1>
        {console.log("inside return")}
        {this.state.counter}
        <button onClick={()=>this.setState({counter:this.this.state.counter+1})}>Counter</button>
      </div>
      
    )
  }
}
