import React, { Component } from 'react';
import Header from './Header'
// import Footer from 'Footer';

//  สร้าง Components - JSX
class App extends Component {
  
  render(){
      return (
        <div>
          <h1> React Rount</h1>
          <h1><a href="header">Header</a></h1>
          <h1><a href="content">Content</a></h1>
          <h1><a href="footer">footer</a></h1>
          <h1><a href="page1">Page1</a></h1>
        </div>
      );
  }
}


export default App;

  // var myStyle = {
  //     fontSize:100,
  //     color:'red' 
  //   }
  //   return (
  //     <div>
  //       <h1 style={myStyle}>Create App</h1>
  //       <h2>{50*50}</h2>
  //     </div>
  //   )