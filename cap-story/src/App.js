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
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home/Home";
import { loadData } from "./axios/getData";
import Stories from "./components/stories/Stories";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
  const state = useSelector((data) => data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stories">
          <Stories />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
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
