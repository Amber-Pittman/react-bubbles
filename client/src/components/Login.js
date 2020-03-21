// #11 Import useState
import React, { useState } from "react";
// #20 Import axios api
import axiosWithAuth from "../utils/axiosWithAuth";

// #6 Create Signin Component
const Login = () => {
  // #16 Set up error state for error component/message
  const[error, setError] = useState()

  // #12 Set up some initial state
  const [data, setData] = useState({
    username: "",
    password: "",
  })

  // #13 Create handleChange function for the inputs
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  // #18 We need a handle submit function for our button
  const handleSubmit= (event) => {
    event.preventDefault()

    // #19 We need to make an axios call. Instead of calling axios post, 
    // we'll use axiosWithAuth as a function in place of axios
    axiosWithAuth ()
      .post("/login", data)
      .then(result => {
        console.log(result)
        localStorage.setItem("token", result.data.token)
        //props.history.push("/bubbles")
      })
      .catch(err => {
        setError(err.response.data.message)
        throw(error)
      })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    
  return (
    // #9 Return a form tag
    // #21 Don't forget to add handleSubmit to the form!
      <form onSubmit={handleSubmit}>
        {/* #17 Inside the component, we can write a simple ternary that says
			if error exists or something is in there that is undefined, show
			a div with className of error, and display the error */}
      {error && <div className="error">{error}</div>}

        <h1>Welcome to the Bubble App!</h1>

        {/* #10 Create some input fields and a button for the form */}
        <input
          type="username"
          autoComplete="username"
          name="username"
          placeholder="Username" 
          // #14A Attach these values and the handleChange function to 
          //  each one of our inputs
          value={data.email}
          onChange={handleChange}
        />
        
        <input
          type="password"
          autoComplete="current-password"
          name="password"
          placeholder="Password" 
          // #14B Attach these values and the handleChange function to 
          //  each one of our inputs
          value={data.email}
          onChange={handleChange}
          />

        <button type="submit">Login</button>
      </form>
    );
};

export default Login;
