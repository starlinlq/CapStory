import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./components/createPost/CreatePost";
import { loadData } from "./axios/getData";
import Card from "./components/cardSection/Card";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  /*   useEffect(() => {
    dispatch(loadData());
  }, []);
 */

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/">
          <Card />
        </Route>
        <Route path="/create">
          <CreatePost />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
