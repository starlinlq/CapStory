import React, { useState, useEffect, useRef } from "react";
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
  ButtonSec,
  MainContainer,
} from "./NavBar.elements";

import { BiMenu } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";
function NavBar() {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [active, setActive] = useState(false);
  const data = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUserId = useSelector((state) => state.user.id);

  const [icon, setIcon] = useState(false);

  function handleIcon() {
    setIcon(!icon);
  }

  function handleActive() {
    if (window.innerWidth < 960) {
      setIcon(!icon);
    }
    setActive(!active);
  }

  function logOut() {
    dispatch({ type: "LOGOUT_SUCCESS" });
    setActive(!active);
    history.push("/");
  }
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <MainContainer>
      <Nav>
        <NavLogo to="/">MEMORIES</NavLogo>
        <NavMenu icon={icon}>
          <NavContainer>
            <NavItem>
              <NavLinks onClick={handleIcon} to="/">
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={handleIcon} to="/stories">
                Stories
                {/* <DropMenu>
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
                </DropMenu> */}
              </NavLinks>
            </NavItem>
            <NavItem></NavItem>
          </NavContainer>

          <Container>
            {data ? (
              <>
                <ButtonSec>
                  <NavButton onClick={handleIcon} to="/create">
                    Create Story
                  </NavButton>
                </ButtonSec>
                <ButtonSec>
                  <UserSection ref={wrapperRef}>
                    <UserAccount onClick={handleActive}>Account</UserAccount>
                    <UserMenu active={active}>
                      <DropButton onClick={handleActive} to="/myAccount">
                        Memories
                      </DropButton>
                      <DropButton
                        onClick={handleActive}
                        to={`/user/${currentUserId}`}
                      >
                        Profile
                      </DropButton>
                      <DropButton onClick={logOut}>Sign Out</DropButton>
                    </UserMenu>
                  </UserSection>
                </ButtonSec>
              </>
            ) : (
              <>
                <NavButton onClick={handleIcon} to="/register">
                  Register
                </NavButton>
                <NavButton onClick={handleIcon} to="/login">
                  Sign In
                </NavButton>{" "}
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
