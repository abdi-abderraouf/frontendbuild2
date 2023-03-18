import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showStudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }

  componentDidMount() {
    //console.log("Print id: " + this.props.match.params.id);
    axios.get('https://backendstudentswithcors.onrender.com/students/'+this.props.match.params.id)
      .then(res => {
         //console.log("Print-showStudentDetails-API-response: " + res.data);
        this.setState({
          student: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowDetails");
      })
  };

  onDeleteClick (id) {
    
    // eslint-disable-next-line no-restricted-globals
    if(confirm("êtes vous sûre de vouloir supprimer"))
    {
      
    axios
      .delete('https://backendstudentswithcors.onrender.com/students/'+id)
      .then(res => {
        alert('deleted')
        this.props.history.push("/");
        //console.log('deleted');

      })
      .catch(err => {
        console.log("Error form ShowDetails_deleteClick");
      })
    }
  };


  render() {

    const student = this.state.student;
    let StudentItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>name</td>
            <td>{student.name}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>email</td>
            <td>{student.email}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>inscription </td>
            <td>{student.inscription}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>photo</td>
            <td>{student.photo} <img src= {student.photo} alt="" height = {500} width={1000} /></td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowStudentDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Student List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Student's Record</h1>
              <p className="lead text-center">
                  View Student's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { StudentItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,student._id)}>Delete Student</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-student/${student._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Student
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showStudentDetails;
