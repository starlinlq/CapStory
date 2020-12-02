import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 1% 0;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

export const Container = styled.div`
  margin: 0 15%;

  @media screen and (max-width: 960px) {
    margin: 0 2%;
  }
`;
export const Button = styled.div`
  border: 1px solid lightgrey;
  border-radius: 50px;
  padding: 1px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }
`;
