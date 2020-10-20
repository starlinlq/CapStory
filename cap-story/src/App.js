import React from "react";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
