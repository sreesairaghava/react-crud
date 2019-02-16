import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class TableRow extends Component {
    delete =(e) => {
        e.preventDefault();
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(()=>{
                console.log('Deleted');
            })
            .catch(err =>{
                console.log('Unable to delete coz:'+err); 
            })
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.person_name}
                </td>
                <td>
                    {this.props.obj.business_name}
                </td>
                <td>
                    {this.props.obj.business_gst_number}
                </td>
                <td>
                   <Link to={"/edit/"+this.props.obj._id}><button className="btn btn-success">Update</button></Link>
                </td>
                <td>
                <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;