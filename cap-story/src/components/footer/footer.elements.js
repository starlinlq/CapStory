import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  display: flex;
  min-height: 150px;
  color: white;
  background-color: black;
  flex-shrink: 0;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    min-height: 200px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 30%;

  @media screen and (max-width: 960px) {
    margin: 0 20%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: salmon;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 100%;
  justify-content: center;
  font-size: 25px;
  font-family: "Anton", sans-serif;

  @media screen and (max-width: 960px) {
    width: 150px;
    font-size: 20px;
    height: 60px;
  }
`;
export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 200px;
  font-size: 17px;

  @media screen and (max-width: 960px) {
    width: 150px;
    height: 60px;
  }
`;
export const Home = styled(Link)`
  text-decoration: none;
  color: white;
  margin-bottom: 5px;
  text-align: center;

  &:hover {
    color: salmon;
  }
`;
export const Stories = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;

  &:hover {
    color: salmon;
  }
`;

export const Social = styled(Link)`
  font-size: 1.3rem;
  color: white;
  text-decoration: none;

  &:hover {
    color: salmon;
    cursor: pointer;
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-evenly;

  @media screen and (max-width: 960px) {
    height: 60px;
  }
`;
