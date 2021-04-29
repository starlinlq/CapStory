import React, { useEffect, useState } from "react";
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
import axios from "axios";

function Home() {
  const [state, setState] = useState([]);
  const Authorization = localStorage.getItem("Authorization");
  const userAuth = useSelector((data) => data.user.isAuthenticated);
  useEffect(function () {
    axios
      .get("http://127.0.0.1:3333/")
      .then((res) => setState(res.data.posts))
      .catch((err) => console.log(err));
  }, []);

  const story = state.slice(0, 4);
  const story2 = state.slice(4, 8);

  return (
    <>
      <HomeHeader data={objOne} />
     
      <Container>
        <Card state={story} size={cardData} />
      </Container>
       <HomeHeader data={objTwo} />
       <Container>
        <Card state={story2} size={cardData} />
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
