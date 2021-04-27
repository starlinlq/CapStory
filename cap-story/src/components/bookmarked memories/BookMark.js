import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../cardSection/Card";
import { cardDataTwo } from "../Home/Data";
import axios from "axios";
import { Container, Title, CardWrapper } from "./bookMark.elements";

function BookMark() {
  const [state, setState] = useState([]);
  const Authorization = localStorage.getItem("Authorization");

  useEffect(function () {
    /*   axios
      .get(`http://127.0.0.1:3333/api/user/bookmark`, {
        headers: { Authorization },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err)); */
  }, []);

  return (
    <Container>
      <Title>Memory List</Title>
      <CardWrapper>
        <Card state={state} size={cardDataTwo} />
      </CardWrapper>
    </Container>
  );
}

export default BookMark;
