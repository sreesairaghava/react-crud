import React, { Component } from 'react';
import axios from 'axios';
class Edit extends Component {
    state={
        person_name:'',
        business_name:'',
        business_gst_number:''
    }
    componentDidMount(){
        axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                person_name: response.data.person_name,
                business_name: response.data.business_name,
                business_gst_number: response.data.business_gst_number
            });
        })
        .catch((error)=>{
            console.log("error is"+ error)
        })
    }
    onChangePersonName = (e) =>{
        this.setState({
            person_name: e.target.value
        })
    }
    onChangeBusinessName =(e) =>{
        this.setState({
            business_name: e.target.value
        })
    }
    onChangeBusinessGstNumber  =(e) =>{
        this.setState({
            business_gst_number: e.target.value
        })
    }
    onSubmitHandler=(e) =>{
            e.preventDefault();
            const obj ={
                person_name: this.state.person_name,
                business_name: this.state.business_name,
                business_gst_number: this.state.business_gst_number
            };
            axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
            .then(res => {console.log(res.data);  this.props.history.push('/index');})
           
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_gst_number}
                      onChange={this.onChangeBusinessGstNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"
                      onClick={this.onSubmitHandler}
                      />
                </div>
            </form>
        </div>
        );
    }
}

export default Edit;