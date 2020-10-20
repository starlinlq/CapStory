import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  font-family: "Sansita Swashed", cursive;
  display: flex;
  margin: 0 10%;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavLogo = styled.h2``;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;

  @media screen and (max-width: 960px) {
    display: flex;
    width: 75%;
    flex-direction: column;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ icon }) => (icon ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
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

  &:hover {
    color: grey;
  }

  @media screen and (max-width: 960px) {
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #4b59f7;
  }

  @media screen and (max-width: 960px) {
    text-align: center;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
