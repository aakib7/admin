import React from 'react';
const StudentProfile = (props) => {
    return ( 
        <div>
            <h2>Name: {props.student.name}</h2>
            <p>Registration: {props.student.registration}</p>
        </div>
     );
}
 
export default StudentProfile;

