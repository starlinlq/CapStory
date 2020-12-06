import React from "react";
import { useSelector } from "react-redux";
import HomeHeader from "../homeHeader/HomeHeader";
import Card from "../cardSection/Card";
import { objTwo, objOne, cardData } from "./Data";
import { MdMonochromePhotos } from "react-icons/md";
import {
  Container,
  Footer,
  HeadPhoto,
  FootBody,
  FootTitle,
  Button,
  ButtContainer,
  TitleWrap,
} from "./home.elements";
import { HiOutlineTrendingUp } from "react-icons/hi";

function Home() {
  const state = useSelector((data) => data.content);
  const userAuth = useSelector((data) => data.user.isAuthenticated);
  console.log(userAuth);

  const story = state.slice(0, 4);
  const story2 = state.slice(0, 4);

  return (
    <>
      <HomeHeader data={objOne} />
      <HomeHeader data={objTwo} />
      <Container>
        <Card state={story} size={cardData} />
      </Container>
      <Footer>
        <FootBody>
          <TitleWrap>
            <MdMonochromePhotos></MdMonochromePhotos>
            <FootTitle>Got A Memory?</FootTitle>
          </TitleWrap>
          <ButtContainer>
            {userAuth ? (
              <Button to="/create">Create A Story</Button>
            ) : (
              <>
                <Button to="/register">Register</Button>
                <Button to="/login">Sign In</Button>{" "}
              </>
            )}
          </ButtContainer>
        </FootBody>
      </Footer>
    </>
  );
}

export default Home;
