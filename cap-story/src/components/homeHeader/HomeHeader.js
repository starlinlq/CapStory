import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import {
  Header,
  HeadBody,
  HeadPhoto,
  Title,
  Story,
  Footer,
  Author,
} from "./Header.elements";

function HomeHeader(props) {
  return (
    <Header>
      <HeadBody objOne={props.objOne}>
        <Title>CREATE AND SHARE YOUR PHOTO STORIES</Title>
        <Author></Author>
        <Story>
          {" "}
          CapStory is a platform for photographers and visual storytellers. We
          make it easy to share photos. tell stories and connect with others{" "}
        </Story>
        <Footer>
          Read More <CgArrowLongRight />
        </Footer>
      </HeadBody>
      <HeadPhoto objOne={props.objOne}></HeadPhoto>
    </Header>
  );
}

export default HomeHeader;
