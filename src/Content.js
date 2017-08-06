import React, { Component } from 'react';

class Content extends Component {
    constructor(){
    super();
    this.state={
      data:[],
      message:"UnLike",
      type:""
    }
     this.changeMessage = this.changeMessage.bind(this);
     this.insertData = this.insertData.bind(this);
  }
  changeMessage(){
    this.setState({message:"LIKE"});
  }
  insertData(){
    var item = "React";
    var myArray = this.state.data;
    myArray.push(item)
    this.setState({data:myArray});
  }
  onchange(event){
    this.setState({type:event.target.value});
  }
  render(){
      return (
        <div>
          Content: <span>{this.props.title}</span>
          {this.state.data}
          <input type="text" onChange={this.onchange.bind(this)}/>
          Type: {this.state.type}
          <button onClick={this.changeMessage}>{this.state.message}</button>
          <button onClick={this.insertData}>Insert</button>
        </div>
      );
  }
}
export default Content;