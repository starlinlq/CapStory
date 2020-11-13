import React from "react";
import { useSelector } from "react-redux";
import {
  Header,
  HeadBody,
  HeadPhoto,
  Title,
  Story,
  Footer,
  FooterLinks,
  Button,
} from "./Header.elements";

function HomeHeader(props) {
  const isUserAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );

  console.log(props.data);
  return (
    <Header>
      <HeadBody data={props.data}>
        <Title>CREATE AND SHARE YOUR PHOTO STORIES</Title>
        <Story>
          {" "}
          CapStory is a platform for photographers and visual storytellers. We
          make it easy to share photos. tell stories and connect with others{" "}
        </Story>
        <Footer data={props.data}>
          <FooterLinks>
            {isUserAuthenticated === false && (
              <>
                <Button to="/register">Register</Button>
                <Button to="login">Sign In</Button>
              </>
            )}
          </FooterLinks>
        </Footer>
      </HeadBody>
      <HeadPhoto data={props.data}></HeadPhoto>
    </Header>
  );
}

export default HomeHeader;
