import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import { getToken } from "./utils/axiosWithAuth";
import "./styles.scss";

function App() {
  const loggedIn = getToken;

  return (
    <Router>
      <div className="App">
        <nav>
          <div>
            <h2 className="bubbles">Login for Color Bubbles!</h2>
          </div>
          <div>
              <Link to="/" className="link">Login</Link>
              {!loggedIn && <Link to="/login">Login</Link> }

              {loggedIn && <Link to="/bubbles" className="link">
                  Bubbles</Link>}
          </div>
        </nav>

        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;