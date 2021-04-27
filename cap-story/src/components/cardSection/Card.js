import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { loadData } from "../../axios/getData";
import {
  MainCard,
  Section,
  CardBody,
  Date,
  Title,
  Author,
  CardFooter,
  DateWrapper,
} from "./Card.elements";

function Card({ state, size }) {
  console.log(state);
  return (
    <Section>
      {state.map((data, index) => (
        <MainCard imgUrl={data.image} key={index} size={size}>
          <CardBody>
            <Title>{data.title}</Title>
            <Author>by {data.author}</Author>
            <Date>{data.story.slice(0, 200) + "..."}</Date>
            <CardFooter to={`/data/${data.id}`}>
              <p>Read Story</p>
              <BsArrowRight />
            </CardFooter>
          </CardBody>
        </MainCard>
      ))}
    </Section>
  );
}

export default Card;
