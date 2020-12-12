import styled from "styled-components";
import { Link } from "react-router-dom";

export const Photo = styled.img`
  background-image: url(${({ url }) => url});
  width: ${({ switchDiv }) => (switchDiv ? "45px" : "55px")};
  height: ${({ switchDiv }) => (switchDiv ? "45px" : "55px")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid white;
  border-radius: 50%;
`;

export const PhotoWrapper = styled(Link)`
  order: ${({ switchDiv }) => (switchDiv ? "2" : "1")};
  width: ${({ switchDiv }) => (switchDiv ? "55px" : "65px")};
  height: ${({ switchDiv }) => (switchDiv ? "55px" : "65px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-color: salmon;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-radius: 50%;
  border-top-color: salmon;
  border-top-width: 2px;
  border-top-style: solid;
`;

export const UserName = styled.h4`
  width: 100%;
  text-align: center;
  color: #01c5c4;

  &:hover {
    color: salmon;
  }
`;
export const UserNameWrapper = styled.div`
  order: ${({ switchDiv }) => (switchDiv ? "1" : "2")};
  display: flex;
  width: 60px;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  margin: 1% 0;
  text-decoration: none;
`;
