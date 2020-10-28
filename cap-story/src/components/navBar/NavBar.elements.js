import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../global/globalStyles";

export const Nav = styled.div`
  display: flex;
  margin: 0 10%;
  padding: 1% 0;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;

  @media screen and (max-width: 960px) {
    display: flex;
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
  }
`;

export const NavIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
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
`;

export const NavButton = styled(Link)`
  padding: 5px 20px;
  background-color: white;
  border: 1px solid black;
  color: black;
  text-decoration: none;

  &:hover {
    margin: 0;
    border-color: lightsalmon;
  }
`;
