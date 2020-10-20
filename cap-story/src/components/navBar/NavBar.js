import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavIcon,
  NavItem,
  NavLinks,
} from "./NavBar.elements";
import { Button } from "../../global/globalStyles";
import { BiMenu } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";
function NavBar() {
  /* const [mobileMenu, setMobileMenu] = useState(false); */
  const [icon, setIcon] = useState(false);

  function handleIcon() {
    setIcon(!icon);
  }

  return (
    <>
      <Nav>
        <NavLogo>CapStory</NavLogo>
        <NavMenu icon={icon}>
          <NavItem>
            <NavLinks>stories</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="">features</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>About</NavLinks>
          </NavItem>
        </NavMenu>
        <NavIcon onClick={handleIcon}>
          {icon ? <CgCloseR /> : <BiMenu />}
        </NavIcon>
        <Button>GET AN INVITE</Button>
      </Nav>
    </>
  );
}

export default NavBar;
