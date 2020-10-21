import styled from "styled-components";
import { Button } from "../../global/globalStyles";
import { Link } from "react-router-dom";

export const Form = styled.form`
  margin: 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Section = styled.div`
  width: 450px;
`;
export const FormButton = styled(Button, Link)`
  margin-top: 5%;
  width: 100%;
  ${Button}
`;

export const TextArea = styled.textarea`
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  padding: 2% 0;
  margin: 4% 0;
`;
export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`;
