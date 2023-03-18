import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const StudentCard = (props) => {
    const  student  = props.student;

    return(
        <div className="card-container">
            <img src= {student.photo} alt="" height = {200} width={250} />
            <div className="desc">
                <h2>
                    <Link to={`/show-student/${student._id}`}>
                        { student.name }
                    </Link>
                </h2>
                <h3>{student.email}</h3>
                <p>{student.inscription}</p>
            </div>
        </div>
    )
};

export default StudentCard;