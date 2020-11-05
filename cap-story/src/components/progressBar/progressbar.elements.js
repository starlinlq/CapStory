import styled from "styled-components";

export const Progress = styled.hr`
  width: ${({ progress }) => progress};
  padding: 5px 0;
  background-color: lightblue;
  border: none;
  border-radius: 7px;
`;

export const Info = styled.div`
  margin-bottom: 7px;
  opacity: 0.6;
`;
