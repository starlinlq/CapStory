import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./components/createPost/CreatePost";
import { GlobalStyle } from "./global/globalStyles";
import Card from "./components/cardSection/Card";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SingleStory from "./components/singleStory/SingleStory";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  /*   useEffect(() => {
    dispatch(loadData());
  }, []);
 */

  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Header />
          <Card />
        </Route>
        <Route exact path="/create">
          <CreatePost />
        </Route>
        <Route path="/data/:id" component={SingleStory} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
