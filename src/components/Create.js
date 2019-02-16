import React, { Component } from 'react';
import axios from 'axios';
class Create extends Component {
    state={
        person_name:'',
        business_name:'',
        business_gst_number:''
    }
    onChangePersonName=(event)=>{
            this.setState({person_name: event.target.value})
    }
    onChangeBussinessName=(event)=>{
        this.setState({business_name: event.target.value})
    }
    onChangeGstNumber=(event)=>{
        this.setState({business_gst_number: event.target.value})
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
       const obj ={
           person_name: this.state.person_name,
           business_name: this.state.business_name,
           business_gst_number: this.state.business_gst_number
       }
       axios.post('http://localhost:4000/business/add', obj)
       .then(res => console.log(res.data));
        this.setState({
            person_name:'',
            business_name:'',
             business_gst_number:''
        })
    };
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Business</h3>
                <form>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.person_name}
                        onChange={this.onChangePersonName}
                        
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.business_name}
                        onChange={this.onChangeBussinessName}
                        
                        />
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.business_gst_number}
                        onChange={this.onChangeGstNumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" 
                        className="btn btn-primary"
                        onClick={this.onSubmitHandler}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Create;