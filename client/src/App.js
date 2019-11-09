import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getToken } from "./utils/api";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  const signedIn = getToken();
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
