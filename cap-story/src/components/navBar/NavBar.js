import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
  UserSection,
  UserAccount,
  UserMenu,
  NavContainer,
  DropButton,
  buttonSec,
  MainContainer,
} from "./NavBar.elements";

import { BiMenu } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";
function NavBar() {
  const data = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUserId = useSelector((state) => state.user.id);

  const [icon, setIcon] = useState(false);

  function handleIcon() {
    setIcon(!icon);
  }

  function logOut() {
    dispatch({ type: "LOGOUT_SUCCESS" });
    history.push("/");
  }

  return (
    <MainContainer>
      <Nav>
        <NavLogo to="/">MEMORIES</NavLogo>
        <NavMenu icon={icon}>
          <NavContainer>
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
          </NavContainer>

          <Container>
            {data ? (
              <>
                <buttonSec>
                  <NavButton to="/create">Create</NavButton>
                </buttonSec>
                <buttonSec>
                  <UserSection>
                    <UserAccount to="/myaccount"> Account</UserAccount>
                    <UserMenu>
                      <DropButton to="/myAccount">Memories</DropButton>
                      <DropButton to={`/user/${currentUserId}`}>
                        Profile
                      </DropButton>
                      <DropButton onClick={logOut}>Sign Out</DropButton>
                    </UserMenu>
                  </UserSection>
                </buttonSec>
              </>
            ) : (
              <>
                <NavButton to="/register">Register</NavButton>
                <NavButton to="/login">Sign In</NavButton>{" "}
              </>
            )}
          </Container>
        </NavMenu>
        <NavIcon onClick={handleIcon}>
          {icon ? <CgCloseR /> : <BiMenu />}
        </NavIcon>
      </Nav>
    </MainContainer>
  );
}

export default NavBar;
