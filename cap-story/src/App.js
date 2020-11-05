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

function App() {
  const state = useSelector((data) => data.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
    dispatch(loadingUser());
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/data/:id" component={SingleStory} />
        <Route exact path="/" component={Home} />
        <Route path="/stories" component={Stories} />
        <Route exact path="/create/:id" component={CreatePost} />
        <Route exact path="/create" component={CreatePost} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route patch="/myaccount" component={DisplayAccount} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
