import { Button, Form, FormGroup, Input, Label,FormText } from "reactstrap";
import React, { useState, useEffect } from "react";


const Login = ()=> {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("admin", username);
    localStorage.setItem("admin@123", password);
    if (username === "admin" && password === "admin@123") {
      console.log("login success");
      window.location.href = "/dashboard";
    } else {
      console.log("Login Failed");
      setError("Invalid Credentials");
    }
  };


    return (
        <div className="SignInContainer">
<h1>SigIn form</h1>
<Form onSubmit={handleSubmit}>

        <FormGroup>
          {/* <Label for="exampleEmail">Email</Label> */}
          <Input type="text" name="email" id="username" placeholder="Enter Email" onChange={(e) => setUsername(e.target.value)} />
              </FormGroup>
        <FormGroup>
          {/* <Label for="examplePassword">Password</Label> */}
        <Input type="password" name="password" id="password" placeholder=" Enter password" onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Button id="submitButton">SigIn</Button>
          </FormGroup>

        <FormGroup>
          <FormText>username= admin, psw= admin@123</FormText>
        </FormGroup> 
        <FormGroup>
        <FormText>{error}</FormText>
        </FormGroup>

        </Form>
        </div>
    );
    
}

export default Login