import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Form,
  Input,
  Label,
  Button,
  Invalid,
  FormWrapper,
  Container,
  Passwordlenght,
} from "./register.elements";
import { registerUser } from "../../globalStore/auth/AuthActions";

const Register = () => {
  const isAuthenticated = useSelector((data) => data.user.isAuthenticated);
  const loginFail = useSelector((data) => data.user.loginFail);
  const [
    inputValid = {
      displayName: false,
      email: false,
      password: false,
      passwordCheck: false,
      passwordlenght: false,
    },
    setInputValid,
  ] = useState();
  const dispatch = useDispatch();
  const [
    user = {
      displayName: "",
      email: "",
      password: "",
      passwordCheck: "",
    },
    setUser,
  ] = useState();
  const history = useHistory();

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
    if (
      user.displayName === "" &&
      user.email === "" &&
      user.password === "" &&
      user.passwordCheck === ""
    ) {
      setInputValid({
        ...inputValid,
        password: true,
        passwordCheck: true,
        email: true,
        displayName: true,
      });
      return;
    } else if (user.displayName === "") {
      setInputValid({ ...inputValid, displayName: true });
      return;
    } else if (user.email === "") {
      setInputValid({ ...inputValid, email: true });
      return;
    } else if (user.password === "") {
      setInputValid({ ...inputValid, password: true });
      return;
    } else if (user.passwordCheck === "") {
      setInputValid({ ...inputValid, passwordCheck: true });
    } else {
      setInputValid({
        ...inputValid,
        displayName: false,
        email: false,
        password: false,
        passwordCheck: false,
      });
      dispatch(registerUser(user));
      setUser({
        displayName: "",
        email: "",
        password: "",
        passwordCheck: "",
      });
    }
    return;
  }
  if (isAuthenticated) {
    history.push("/");
  }

  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={sendData}>
          <Label>Display Name</Label>
          <Input onChange={setUserName} value={user.displayName} />
          {inputValid.displayName ? (
            <Invalid>Please enter a name</Invalid>
          ) : null}
          <Label>Email</Label>
          <Input onChange={setEmail} value={user.email} />
          {inputValid.email ? <Invalid>PLease enter email</Invalid> : null}
          <Label>Password</Label>
          <Input onChange={setPassword} value={user.password} type="password" />
          {inputValid.password ? null : (
            <Passwordlenght>
              password needs to be longer than 6 characters
            </Passwordlenght>
          )}
          {inputValid.password ? (
            <Invalid>please enter password</Invalid>
          ) : null}
          <Label>Password Check</Label>
          <Input
            onChange={setPasswordCheck}
            value={user.passwordCheck}
            type="password"
          />
          {inputValid.passwordCheck ? (
            <Invalid>please verify password</Invalid>
          ) : null}
          {isAuthenticated ? (
            <Invalid>
              there is something wrong with the information provided, please
              verify it
            </Invalid>
          ) : null}
          <Button>Register</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
