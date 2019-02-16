import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
class Index extends Component {
    state={
        business: []
    }
    componentDidMount(){
        axios.get('http://localhost:4000/business')
        .then( response =>{
                this.setState({business: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }
    tabRow =() =>{
       return this.state.business.map((object,i)=>{
           return <TableRow obj={object} key={i}/>
       })
    }
    render() {
        return (
            <div>
               <h3 align="center">Business List</h3>
               <table className="table table-stripped" style={{ marginTop: 20}}>
                   <thead>
                       <tr>
                           <th>Person</th>
                           <th>Business</th>
                           <th>GST Number</th>
                           <th colSpan="2">Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.tabRow()}
                   </tbody>
               </table>
            </div>
        )
    }
}

export default Index;