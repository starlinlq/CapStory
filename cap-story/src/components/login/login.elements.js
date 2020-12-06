import styled from "styled-components";
import { Link } from "react-router-dom";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  height: 550px;
  margin: 0 15%;

  @media screen and (max-width: 960px) {
    height: 250px;
    margin: 0 10%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid black;
  border-left: none;
  height: 550px;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    border: none;
    height: auto;
    margin-top: 5%;
  }
`;
export const FormWrapper = styled.div`
  width: 350px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 2% 0;
`;

export const BackgroundWrapper = styled.div`
  @media screen and (max-width: 960px) {
    margin-top: 5%;
  }
`;
export const Background = styled.img`
  background-image: url("https://cdn.pixabay.com/photo/2015/09/09/18/11/camera-932267_960_720.jpg");
  width: 500px;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    height: 250px;
    width: 350px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 70vh;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1% 0;

  @media screen and (max-width: 960px) {
  }
`;
export const Label = styled.label`
  align-self: flex-start;
  font-size: 20px;
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 4%;
  background: none;
  color: black;
  border: 1px solid black;
  padding: 1% 15%;
  cursor: pointer;

  &:hover {
    border-color: salmon;
  }
`;

export const Invalid = styled.p`
  align-self: flex-start;
  margin: 2% 0;
  color: red;
`;
