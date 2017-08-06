import React, { Component } from 'react';
import List from './List';
class Page1 extends Component {
   constructor(){
       super();
       this.state={
           value:'',
           data:[]
       }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
   }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        var arr = this.state.data;
        arr.push(this.state.value);
        this.setState({data:arr})
        console.log(this.state)
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    handleReset(){
        this.setState({
            value:''
        })
    }
    
    render(){
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <input type="number" value={this.state.value} onChange={this.handleChange}/> 
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Clear" onClick={this.handleReset}/>
                </form>
                <List item={this.state.data}/>
            </div>
        )
    }
}

export default Page1;