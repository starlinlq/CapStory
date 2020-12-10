import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./components/createPost/CreatePost";
import { GlobalStyle } from "./global/globalStyles";
import Footer from "./components/footer/Footer";
import SingleStory from "./components/singleStory/SingleStory";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home/Home";
import { loadData } from "./axios/getData";
import Stories from "./components/stories/Stories";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { loadingUser } from "./globalStore/auth/AuthActions";
import DisplayAccount from "./components/displayAccount/DisplayAccount";
import DisplayUser from "./components/displayUser/DisplayUser";
import styled from "styled-components";
import BookMark from "./components/bookmarked memories/BookMark";
import { getComments } from "./globalStore/actionCreator";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
    dispatch(loadingUser());
  }, []);

  const Content = styled.div`
    flex: 1 0 auto;
  `;

  return (
    <>
      <GlobalStyle />
      <Router>
        <Content>
          <ScrollToTop />
          <NavBar />
          <Switch>
            <Route path="/bookmark" component={BookMark} />
            <Route path="/data/:id" component={SingleStory} />
            <Route exact path="/" component={Home} />
            <Route path="/stories" component={Stories} />
            <Route exact path="/create/:id" component={CreatePost} />
            <Route exact path="/create" component={CreatePost} />
            <Route exact path="/login/:id" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/myaccount" component={DisplayAccount} />
            <Route exact path="/user/:id" component={DisplayUser} />
          </Switch>
        </Content>
        <Footer />
      </Router>
    </>
  );
}

export default App;
