import React, { Component } from 'react';
import Page1 from './Page1'
class Header extends Component {
  constructor(){
    super();
    this.state={
      name:"FaceBook",
      count: 0
    }
  }
 
  render(){
      setTimeout(()=>{
        this.setState({name:"Start"});
      },3000);
      setInterval(()=>{
        this.setState({count:this.state.count+1});
      },100);
      return (
        <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.count}</p>
            <Page1 id="page" title="Text"/>
        </div>
      );
  }
}

export default Header;