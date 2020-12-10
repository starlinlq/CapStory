import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../cardSection/Card";
import { cardDataTwo } from "../Home/Data";

import { Container, Title, CardWrapper } from "./bookMark.elements";

function BookMark() {
  const [state, setState] = useState([]);
  const bookMarked = useSelector((data) => data.user.savedPost);

  useEffect(() => {}, []);

  return (
    <Container>
      <Title>Memory List</Title>
      <CardWrapper>
        {bookMarked ? <Card state={bookMarked} size={cardDataTwo} /> : null}
      </CardWrapper>
    </Container>
  );
}

export default BookMark;
