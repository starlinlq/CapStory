import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Label, Button } from "./register.elements";
import { registerUser } from "../../globalStore/auth/AuthActions";

const Register = () => {
  const store = useSelector((res) => res);
  const dispatch = useDispatch();
  console.log(store);
  const [
    user = {
      displayName: "",
      email: "",
      password: "",
      passwordCheck: "",
    },
    setUser,
  ] = useState();

  function setEmail(e) {
    setUser({ ...user, email: e.target.value });
  }

  function setUserName(e) {
    setUser({ ...user, displayName: e.target.value });
  }

  function setPassword(e) {
    setUser({ ...user, password: e.target.value });
  }

  function setPasswordCheck(e) {
    setUser({ ...user, passwordCheck: e.target.value });
  }

  function sendData(e) {
    e.preventDefault();

    dispatch(registerUser(user));

    setUser({
      displayName: "",
      email: "",
      password: "",
      passwordCheck: "",
    });
  }

  return (
    <Form onSubmit={sendData}>
      <Label>Display Name</Label>
      <Input onChange={setUserName} value={user.displayName} />
      <Label>Email</Label>
      <Input onChange={setEmail} value={user.email} />
      <Label>Password</Label>
      <Input onChange={setPassword} value={user.password} type="password" />
      <Label>Password Check</Label>
      <Input onChange={setPasswordCheck} value={user.passwordCheck} />
      <Button>Register</Button>
    </Form>
  );
};

export default Register;
