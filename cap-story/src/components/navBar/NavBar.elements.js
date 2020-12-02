import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../global/globalStyles";

export const MainContainer = styled.div`
  margin: 0 10%;

  @media screen and (max-width: 960px) {
    margin: 0 2%;
  }
`;

export const Nav = styled.div`
  display: flex;
  margin: 0 5%;
  padding: 1% 0;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: black;
  font-family: "Anton", sans-serif;

  @media screen and (max-width: 960px) {
    width: 30%;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 80%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const NavMenu = styled.div`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    height: 90vh;
    position: absolute;
    top: 40px;
    left: ${({ icon }) => (icon ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: black;
    z-index: 1;
    justify-content: start;
  }
`;

export const NavIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: relative;
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: grey;
  }

  @media screen and (max-width: 960px) {
    &:hover {
      border: none;
    }
  }
`;
export const DropMenu = styled.div`
  display: none;
  position: absolute;
  background: white;
  top: 50px;
  height: 250px;
  width: 550px;

  border-radius: 5px;
  z-index: 1;

  &:hover {
    display: block;
    cursor: default;
  }
`;

export const NavLinks = styled(Link)`
  color: black;
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: red;
  }

  &:hover ${DropMenu} {
    display: block;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    color: white;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;

export const DropBody = styled.div``;
export const DropHeader = styled.div`
  background-image: url("https://m.economictimes.com/thumb/height-450,width-600,imgsize-1016106,msid-68721417/nature1_gettyimages.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid transparent;
  border-radius: 7px;
  margin-top: 10px;

  height: 180px;
  width: 160px;
`;
export const DropContent = styled.div`
  &:hover {
  }
`;
export const Container = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`;
export const buttonSec = styled.div``;
export const NavButton = styled(Link)`
  background-color: white;
  border: 1px solid black;
  color: black;
  text-decoration: none;
  padding: 5px 20px;

  &:hover {
    margin: 0;
    border-color: lightsalmon;
  }
`;

export const UserAccount = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 5px 20px;
  height: 100%;

  &:hover {
    border-color: blue;
  }

  @media screen and (max-width: 960px) {
    background-color: white;
    border-radius: 0px;
    margin-left: 10px;
  }
`;
export const UserMenu = styled.div`
  display: none;
  position: absolute;
  top: 32px;
  width: 150px;

  border: 1px solid lightgrey;
  background-color: white;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    ${UserMenu} {
      display: block;
    }
  }
`;
export const UserButton = styled.button`
  padding: 5px 20px;
  background-color: white;
  border: 1px solid black;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    margin: 0;
    border-color: lightsalmon;
  }
`;

export const DropButton = styled(Link)`
  list-style: none;
  display: block;
  text-align: center;
  width: 100%;
  padding: 10px 0;
  background-color: white;

  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    margin: 0;
    border-color: lightsalmon;
    border: 1px solid lightgrey;
  }
`;
