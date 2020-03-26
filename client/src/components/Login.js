import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [error, setError] = useState()

  const [data, setData] = useState({
    username: "",
    password: "",
  })

  const history = useHistory();

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axiosWithAuth()
      .post("/login", data)
      .then(res => {
        console.log(res.data.payload)
        localStorage.setItem("token", res.data.payload)
        history.push("/protected");
      })
      .catch(err => {
        console.log(err, "Error in axiosWithAuth on Login")
        setError(err.res.data.message)
      })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    
  return (
    <div className="bubbleApp">
        <div>
        <form onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}

          <div className="loginForm">
          
          <label> Username:
            <input
              type="text"
              autoComplete="username"
              name="username"
              placeholder="Username" 
              value={data.username}
              onChange={handleChange}
            />
          </label>
          
          <label> Password: 
            <input
              type="password"
              autoComplete="current-password"
              name="password"
              placeholder="Password" 
              value={data.password}
              onChange={handleChange}
              />
            </label>
          
          <button className="button" type="submit">Login</button>
        
        </div>
      </form>
    </div>
  </div>
  );
};

export default Login;