import React from "react";
import { useSelector } from "react-redux";
import {
  Header,
  HeadBody,
  HeadVideo,
  HeadPhoto,
  Title,
  Story,
  Footer,
  FooterLinks,
  Button,
} from "./Header.elements";

function HomeHeader({ data }) {
  const isUserAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );

  return (
    <Header>
      <HeadBody data={data}>
        <Title>CREATE AND SHARE YOUR PHOTO STORIES</Title>
        <Story>
          {" "}
          CapStory is a platform for photographers and visual storytellers. We
          make it easy to share photos. tell stories and connect with others{" "}
        </Story>
        <Footer data={data}>
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
      {data.changeHeader ? (
        <HeadVideo
          data={data}
          src={data.video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <HeadPhoto data={data} />
      )}
    </Header>
  );
}

export default HomeHeader;
