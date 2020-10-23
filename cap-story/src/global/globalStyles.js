import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
   margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

html{
  min-height: 100vh;
 
}


body{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 15%;
  font-family: 'Roboto', sans-serif;

  @media screen and (max-width:960px){
    margin: 0;
  }
  
}
`;
export const Button = styled.button`
  padding: 1%;
  background: black;
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
