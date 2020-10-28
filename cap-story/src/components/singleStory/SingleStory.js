import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Section, Body, Title, Content } from "./singleStory.elements";
function SingleStory({ match }) {
  const state = useSelector((state) => state.content);
  const id = match.params.id;
  const data = state.filter((item) => item.id == id).map((item) => item);

  return (
    <>
      {data.map((item) => (
        <Section>
          <Header imgUrl={item.imgUrl}></Header>
          <Body>
            <Title>{item.title}</Title>
            <Content>{item.story}</Content>
          </Body>
        </Section>
      ))}
    </>
  );
}

export default SingleStory;
