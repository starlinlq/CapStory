import React from "react";
import { ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import {
  Section,
  Logo,
  LinksWrapper,
  LogoWrapper,
  Home,
  Stories,
  Container,
  SocialWrapper,
  Social,
} from "./footer.elements";

function Footer() {
  return (
    <Section>
      <Container>
        <LogoWrapper>
          <Logo to="/">MEMORIES</Logo>
        </LogoWrapper>
        <LinksWrapper>
          <Home to="/">Home</Home>
          <Stories to="/stories">Stories</Stories>
        </LinksWrapper>
        <SocialWrapper>
          <Social to="https://www.facebook.com/">
            <FaFacebookSquare />
          </Social>
          <Social to="https://www.instagram.com/">
            <ImInstagram />
          </Social>
          <Social to="https://twitter.com/">
            <AiFillTwitterSquare />
          </Social>
        </SocialWrapper>
      </Container>
    </Section>
  );
}

export default Footer;
