import React from "react";
import ReactDOM from "react-dom";

// #1 install react router
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	// #2 Wrap app in browser component
	<Router>
		<App />
	</Router>,
	document.getElementById("root"),
)
