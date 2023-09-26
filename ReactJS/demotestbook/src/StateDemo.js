import React from 'react';

export default class StateDemo extends React.Component{
    constructor(){
        super();//this properties getting properties of parent in this child
        this.state={
            name:"Shubham",
            age:24,
            shareCount:0
        }
    }
    //simple function
    // updateData(){
    //     this.setState({
    //         name:"Shubham Kadu",
    //         shareCount:this.state.shareCount+1
    //     })
    // }

    // this is Updating and Previous
    updateData(){
        this.setState((prevState)=>(console.log(prevState),{
            name:"Shubham Kadu",
            shareCount:prevState.shareCount+1
        }));

        this.setState((prevState)=>(console.log(prevState),{
            shareCount:prevState.shareCount+1
        }));

        this.setState((prevState)=>(console.log(prevState),{
            shareCount:prevState.shareCount+1
        }));
    }
    render(){
        return(
            <div>
                <h1>we are using calss component</h1>
                <h1>The name is : {this.state.name}</h1>
                <h1>The age is : {this.state.age}</h1>
                <h1>The Content shared by : {this.state.shareCount}</h1>
                <button onClick={()=>this.updateData()}>Shared Data</button>
            </div>
        )    
    }
}
