import styled from "styled-components";
import { Link } from "react-router-dom";

export const Photo = styled.img`
  background-image: url(${({ url }) => url});
  width: 55px;
  height: 55px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid white;
  border-radius: 50%;
`;
export const PhotoWrapper = styled(Link)`
  width: 65px;
  height: 65px;
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

export const UserName = styled.h4``;
export const UserNameWrapper = styled.div`
  display: flex;
  width: 60px;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  margin: 1% 0;
`;
