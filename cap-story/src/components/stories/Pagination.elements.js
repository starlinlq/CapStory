import styled from "styled-components";

export const Pages = styled.ul`
  list-style: none;
  display: flex;

  margin: 10px 0;
  border: 1px solid lightgrey;

  border-radius: 5px;
  padding: 0.3% 0;
`;

export const PageNumber = styled.li`
  cursor: pointer;
  padding: 0.5%;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 0 3px;
  &:hover {
    color: red;
  }
  &:focus {
    border-radius: 1px solid blue;
  }
`;
