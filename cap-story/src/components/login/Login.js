import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Label,
  Button,
  Invalid,
  Container,
  FormWrapper,
  BackgroundWrapper,
  Background,
  Wrapper,
  InputWrapper,
  Welcome,
} from "./login.elements";
import { logInUser } from "../../globalStore/auth/AuthActions";
import { useHistory } from "react-router-dom";

function Login({ match }) {
  const history = useHistory();
  const [data = { email: "", password: "" }, setData] = useState();
  const dispatch = useDispatch();
  const loginFail = useSelector((data) => data.user.loginFail);
  const userAuthenticated = useSelector((data) => data.user.isAuthenticated);
  const dataId = match.params.id;
  const [
    emptyData = { email: false, password: false },
    setEmptyData,
  ] = useState();
  console.log(userAuthenticated);

  function getEmail(e) {
    setData({ ...data, email: e.target.value });
  }

  function getPassword(e) {
    setData({ ...data, password: e.target.value });
  }

  function sendData(e) {
    e.preventDefault();
    if (data.email === "" && data.password === "") {
      setEmptyData({ ...emptyData, email: true, password: true });
      return;
    } else if (data.email === "") {
      setEmptyData({ ...emptyData, email: true });
      return;
    } else if (data.password === "") {
      setEmptyData({ ...emptyData, password: true });
      return;
    } else {
      setEmptyData({ ...emptyData, email: false, password: false });
      dispatch(logInUser(data));
    }
    return;
  }
  if (userAuthenticated) {
    if (match.params.id) {
      history.push(`/data/${match.params.id}`);
    } else {
      history.push("/");
    }
  }

  return (
    <Container>
      <Wrapper>
        <BackgroundWrapper>
          <Background />
        </BackgroundWrapper>
        <FormWrapper>
          <Welcome>Welcome back,</Welcome>
          <Form onSubmit={sendData}>
            <Label>Email</Label>
            <Input onChange={getEmail} value={data.email} />
            {emptyData.email ? <Invalid>please enter an email</Invalid> : null}

            <Label>Password</Label>
            <Input
              onChange={getPassword}
              value={data.password}
              type="password"
            />
            {emptyData.password ? (
              <Invalid>please enter a password</Invalid>
            ) : null}
            {loginFail ? (
              <Invalid>Incorrent user data, please try again</Invalid>
            ) : null}
            <Button>Sign In</Button>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}

export default Login;
