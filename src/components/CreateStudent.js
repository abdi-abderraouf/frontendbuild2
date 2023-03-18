import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import axios from 'axios';


class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      inscription:'',
      photo:''
    };
    this.state = {
      photo: null
    };
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        photo: URL.createObjectURL(img)
      });
    }
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});

  };

  onSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
   /* const data1 = new Formdata();
    data1.append('name',e.target.value);
    data1.append('email',e.target.value);
    data1.append('inscription',e.target.value);
    data1.append('file',e.target.files[0]);
      */
    const data = {
      name: this.state.name,
      email: this.state.email,
      inscription: this.state.inscription,
      photo:this.state.photo
    };
    console.log(data);

    axios  
      .post('https://backendstudentswithcors.onrender.com/students', data)
      .then(res => {
        this.setState({
          name: '',
          email:'',
          inscription:'',
          photo:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateStudent!");
      })
  };

  render() {
    return (
      <div className="CreateStudent">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Student List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Student</h1>
              <p className="lead text-center">
                  Create new student
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='name of the Student'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='email'
                    name='email'
                    className='form-control'
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='inscription here'
                    name='inscription'
                    className='form-control'
                    value={this.state.inscription}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <img src={this.state.image} alt=''/>
                  <h4>Select Image</h4>
                  <input type="file" name="image" onChange={this.onImageChange} />
                </div>
            
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStudent;
