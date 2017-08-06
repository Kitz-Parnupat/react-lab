import React,{Component} from 'react'

class List extends Component{
    constructor(){
        super();
        this.state={
            data:['1','2']
        }
    }
     render(){
         return (
             <div>
                 <table>
                     <tr>
                         <th>List</th>
                     </tr>
                        {
                            this.props.item.map((item)=>
                                <tr>
                                    <td>{item}</td>
                                </tr>
                            )
                        }
             
                 </table>
             </div>
         )
     }
}

export default List;