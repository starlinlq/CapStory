import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Label, Button } from "./login.elements";
import { logInUser } from "../../globalStore/auth/AuthActions";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [data = { email: "", password: "" }, setData] = useState();
  const dispatch = useDispatch();

  function getEmail(e) {
    setData({ ...data, email: e.target.value });
  }

  function getPassword(e) {
    setData({ ...data, password: e.target.value });
  }

  function sendData(e) {
    dispatch(logInUser(data));
    history.push("/");
  }

  return (
    <Form onSubmit={sendData}>
      <Label>Email</Label>
      <Input onChange={getEmail} value={data.email} />
      <Label>Password</Label>
      <Input onChange={getPassword} value={data.password} type="password" />
      <Button>Log In</Button>
    </Form>
  );
}

export default Login;
