import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{

}
`;
export const Button = styled.button`
  height: 30px;
  padding: 0 2%;
  background: black;
  border-radius: 2px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background: none;
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
