import { useState } from "react";
import axios from "axios";
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user_name,setUserName] = useState('');


    const newPost = {
    user_name: user_name,
    email: email,
    password: password
};

const sendPostRequest = async (e) => {
    e.preventDefault();
    try {
        const resp = await axios.post('http://localhost:3001/users/register',{
        newPost,
        headers: {
          "x-apikey": "API_KEY",},
        responseType: "json",
      });
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};






    // const submitForm = async(e)=>{
    
    // await axios.post('http://localhost:3001/users/register', {
    // user_name: user_name,
    // email: email,
    // password: password}).then(function (response) {
    // console.log(response);});


    // }



    return ( <div>
        <form >
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