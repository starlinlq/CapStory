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
} from "./Card.elements";

function Card({ state, size }) {
  return (
    <>
      <Section>
        {state.map((data) => (
          <MainCard imgUrl={data.imgUrl} key={data._id} size={size}>
            <CardBody>
              <Date>{data.date}</Date>
              <Title>{data.title}</Title>
              <Author>by {data.author}</Author>
              <CardFooter to={`/data/${data._id}`}>
                <p>Read Story</p>
                <BsArrowRight />
              </CardFooter>
            </CardBody>
          </MainCard>
        ))}
      </Section>
    </>
  );
}

export default Card;
