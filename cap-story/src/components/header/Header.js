import React from "react";
import { Section, Body, Title, Author, Story, Footer } from "./Header.elements";
import { BsArrowRight } from "react-icons/bs";
function Header() {
  return (
    <>
      <Section>
        <Body>
          <Title>HAZY FULL MOON OF APPALACHIA</Title>
          <Author>
            March 2dn 2020 by <b>John AppleSeed </b>
          </Author>
          <Story>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures...
          </Story>
          <Footer>
            <p>
              <b>Read The Story</b>
            </p>
            <BsArrowRight />
          </Footer>
        </Body>
      </Section>
    </>
  );
}

export default Header;
