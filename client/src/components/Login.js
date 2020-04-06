import React, {useState} from "react";
import api from "../utils/api";

function Login(props) {
  const [error, setError] = useState()

  const [data, setData] = useState({ 
    email: "",
		password: "",
  })
  
  const handleChange = (event) => {
		setData({
			...data, 
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
    event.preventDefault()
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    api()
      .post("/api/login", data)
      .then(result => {
        localStorage.setItem("token", result.data.payload)

        props.history.push("/bubbles")
      })
      .catch(error => {
        setError(error.response.data.message)
      })
    }

  return (
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}

        <input 
            type="text" 
            autoComplete="username" 
            name="username" 
            placeholder="Username" 
            value={data.username} 
            onChange={handleChange} />
        <input 
            type="password" 
            autoComplete="current-password" 
            name="password" 
            placeholder="Password" 
            value={data.password} 
            onChange={handleChange} />

        <button type="submit">Sign In</button>
      </form>
    );
};

export default Login;
