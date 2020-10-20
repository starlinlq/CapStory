import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./components/createPost/CreatePost";
function App() {
  const state = useSelector((state) => state);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/create">
          <CreatePost />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
