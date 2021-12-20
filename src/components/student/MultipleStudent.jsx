import React from 'react';
import StudentProfile from './StudentProfile';
import StudentData from './data';
const MultipleStudent = () => {
    const [student,setStudent] = React.useState([]);
    const getData = () =>{
      setStudent(StudentData);
    }
    // React.useEffect(getData, []);

   
    

    return ( <div>  
      {student.map((s) => (
        <StudentProfile student={s} />
      ))}
    </div>);
}
 
export default MultipleStudent;