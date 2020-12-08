import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 7%;
  width: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  bottom: 23px;
  border: solid 1px black;
  border-radius: 20px;

  background: white;
  height: 380px;
`;
export const Container = styled.div`
  display: flex;
  height: 75vh;

  @media screen and (max-width: 960px) {
    height: 100vh;
    margin: 0 2%;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 5px 0;
  margin: 1% 0;
`;
export const Passwordlenght = styled.p`
  font-size: 12px;
  align-self: flex-start;
  margin-bottom: 1%;
`;
export const Label = styled.label`
  align-self: flex-start;
  font-weight: bold;
`;

export const Button = styled.button`
  margin-top: 1%;
  padding: 1% 0;
  background: none;
  color: black;
  border: 1px solid black;

  cursor: pointer;
  width: 100%;

  &:hover {
    border-color: salmon;
  }
`;

export const Invalid = styled.p`
  align-self: flex-start;
  color: red;
`;

export const ImgWrapper = styled.div``;
export const Img = styled.img`
  background-image: url("https://cdn.pixabay.com/photo/2014/11/03/10/44/camera-514992_960_720.jpg");
  height: 250px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const FormContainer = styled.div`
  width: 26%;
  margin: auto;
  position: relative;
  align-self: center;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
