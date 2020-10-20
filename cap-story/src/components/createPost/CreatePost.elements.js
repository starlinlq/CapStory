import styled from "styled-components";
import { Button } from "../../global/globalStyles";

export const Form = styled.form`
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Section = styled.div`
  width: 450px;
`;
export const FormButton = styled(Button)`
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
  border-raidus: 7px;
`;
export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`;
