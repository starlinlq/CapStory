import styled from "styled-components";
import { Link } from "react-router-dom";
export const Form = styled.form`
  margin: 0 10%;
  @media screen and (max-width: 960px) {
  }
`;
export const Welcome = styled.h2`
  margin-bottom: 3%;
`;

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid white;
  flex-direction: column;
  width: 450px;
  @media screen and (max-width: 960px) {
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 20px;
  position: relative;
  bottom: 20px;
  background-color: white;
  height: 300px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 2% 0;
`;

export const BackgroundWrapper = styled.div`
  @media screen and (max-width: 960px) {
  }
`;
export const Background = styled.img`
  background-image: url("https://cdn.pixabay.com/photo/2015/09/09/18/11/camera-932267_960_720.jpg");
  width: 100%;
  height: 250px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  @media screen and (max-width: 960px) {
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 70vh;
  align-items: center;

  @media screen and (max-width: 960px) {
    height: 100vh;
    margin: 0 2%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 0;

  @media screen and (max-width: 960px) {
  }
`;
export const Label = styled.label`
  align-self: flex-start;
  font-size: 20px;
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 5%;
  background: none;
  color: black;
  border: 1px solid black;
  padding: 1% 15%;
  cursor: pointer;
  width: 100%;

  &:hover {
    border-color: salmon;
  }
`;

export const Invalid = styled.p`
  color: red;
`;
