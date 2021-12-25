import { useState } from "react";
import axios from "axios";
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user_name,setUserName] = useState('');

const sendPostRequest = async (e) => {
    e.preventDefault();
    axios.post('/users/register', {
    "user_name": user_name,
    "email": email,
    "password": password
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};






    // const submitForm = async(e)=>{
    
    // await axios.post('http://localhost:3001/users/register', {
    // user_name: user_name,
    // email: email,
    // password: password}).then(function (response) {
    // console.log(response);});


    // }



    return ( <div>
        <form action="" method="POST">
            <input placeholder="User Name" name = "user_name"
            value={user_name}
            onChange={(e)=>{setUserName(e.target.value)}}
            /><br />
            <input placeholder="Email" name = "email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
             /><br />
            <input placeholder="Password" name = "Password"
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}}/><br />
            <button type="submit"
            onClick={sendPostRequest}>Submit</button>
        </form>
    </div> );
}
 
export default Login;