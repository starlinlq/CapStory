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

function Card() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <>
      <Section>
        {state.map((data) => (
          <MainCard imgUrl={data.imgUrl}>
            <CardBody>
              <Date>{data.date}</Date>
              <Title>{data.title}</Title>
              <Author>by {data.author}</Author>
              <CardFooter to="/create">
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
