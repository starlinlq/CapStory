import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Label, Button } from "./login.elements";
import { loadingUser } from "../../globalStore/auth/AuthActions";

function Login() {
  const [data = { email: "", password: "" }, setData] = useState();
  const dispatch = useDispatch();

  const state = useSelector((res) => res);

  function getEmail(e) {
    setData({ ...data, email: e.target.value });
  }

  function getPassword(e) {
    setData({ ...data, password: e.target.value });
  }

  function sendData(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={sendData}>
      <Label>Email</Label>
      <Input onChange={getEmail} value={data.email} />
      <Label>Password</Label>
      <Input onChange={getPassword} value={data.password} />
      <Button>Log In</Button>
    </Form>
  );
}

export default Login;
