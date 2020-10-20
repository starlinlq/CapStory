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
  }, []);

  return (
    <>
      <Section>
        <MainCard>
          <CardBody to="/">
            <Date>April 16th 2020</Date>
            <Title>The Mountains</Title>
            <Author>by John Leon</Author>
            <CardFooter>
              <p>Read More</p>
              <BsArrowRight />
            </CardFooter>
          </CardBody>
        </MainCard>
      </Section>
    </>
  );
}

export default Card;
