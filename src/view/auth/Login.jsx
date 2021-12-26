import { useState } from "react";
// import { Button, Grid, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";
const Login = () => {
  // const navigate = useNavigate();
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // setEmail(user.email);
  // setPassword(user.password);

  

  // const handleLogin = () => {
  //   new Promise((resolve, reject) => {
  //     axiosInstance.post("/login", {email, password }).then((token) => {
  //         localStorage.setItem("token", token);
  //         resolve(token);
  //       }).catch((err) => {
  //         reject(err);
  //       });
  //   });
  // }
    
    return ( <div>
      <h1>Hello</h1>
        <form action="" method="POST">
            <input placeholder="Email" name = "email"
            value={user.email}
            onChange = {(e) => {
              setUser({ ...user, email: e.target.value });
            }}
             /><br />
            <input placeholder="Password" name = "password"
             value={user.password}
             onChange = {(e) => {
              setUser({ ...user, password: e.target.value });
            }}/><br />
            <button type="submit"
            onClick={(e) => {
              axiosInstance
                .post("/login", user)
                .then((response) => {
                  console.log(response);
                  localStorage.setItem("jwt_access_token", response.data);
                  window.location.replace("/admin");
                })
                .catch((e) => {
                  console.log(e);
                });
            }}>LogIn</button>
        </form>
    </div> );
}
 
export default Login;
