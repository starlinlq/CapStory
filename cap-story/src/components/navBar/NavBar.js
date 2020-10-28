import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavIcon,
  NavItem,
  NavLinks,
  DropMenu,
  DropBody,
  DropHeader,
  DropContent,
  Section,
  Container,
  NavButton,
} from "./NavBar.elements";

import { BiMenu } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";
function NavBar() {
  const data = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  /* const [mobileMenu, setMobileMenu] = useState(false); */
  const [icon, setIcon] = useState(false);

  function handleIcon() {
    setIcon(!icon);
  }

  function logOut() {
    dispatch({ type: "LOGOUT_SUCCESS" });
  }

  return (
    <>
      <Nav>
        <NavLogo to="/">CapStory</NavLogo>
        <NavMenu icon={icon}>
          <NavItem>
            <NavLinks to="/">HOME</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/stories">
              STORIES
              <DropMenu>
                <Section>
                  <DropBody>
                    <DropHeader></DropHeader>
                    <DropContent>Freedom</DropContent>
                  </DropBody>
                  <DropBody>
                    <DropHeader></DropHeader>
                    <DropContent>Places</DropContent>
                  </DropBody>
                  <DropBody>
                    <DropHeader></DropHeader>
                    <DropContent>Emotions</DropContent>
                  </DropBody>
                </Section>
              </DropMenu>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">FEATURES</NavLinks>
          </NavItem>
        </NavMenu>
        <NavIcon onClick={handleIcon}>
          {icon ? <CgCloseR /> : <BiMenu />}
        </NavIcon>
        <Container>
          {data ? (
            <NavButton onClick={logOut}>Log Out</NavButton>
          ) : (
            <>
              <NavButton to="/register">Sign Up</NavButton>
              <NavButton to="/login">Log In</NavButton>{" "}
            </>
          )}
        </Container>
      </Nav>
    </>
  );
}

export default NavBar;
