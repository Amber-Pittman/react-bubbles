import React from "react";

// #6 Create Signin Component
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    
  return (
    // #9 Return a form tag
      <form>
        <h1>Welcome to the Bubble App!</h1>

        {/* #10 Create some input fields and a button for the form */}
        <input
          type="email"
          autoComplete="email"
          name="email"
          placeholder="Email" />
        
        <input
          type="password"
          autoComplete="current-password"
          name="password"
          placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    );
};

export default Login;
