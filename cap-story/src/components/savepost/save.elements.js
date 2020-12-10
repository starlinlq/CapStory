import styled from "styled-components";
export const SaveWrapper = styled.div`
  position: absolute;
  top: -5px;
  border: 1px solid lightgrey;
  width: 110px;
  border-radius: 7px;
  display: none;
`;
export const IconWrapper = styled.div`
  font-size: 25px;
  cursor: pointer;
`;

export const ShowSave = styled.p`
  text-align: center;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  display: ${({ isAuthenticated }) => (isAuthenticated ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover ${SaveWrapper} {
    display: block;
  }
`;
