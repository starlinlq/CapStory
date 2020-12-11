import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../cardSection/Card";
import { cardDataTwo } from "../Home/Data";
import Axios from "axios";
import { Container, Title, CardWrapper } from "./bookMark.elements";

function BookMark() {
  const [state, setState] = useState([]);
  const token = useSelector((data) => data.user.token);

  useEffect(() => {
    async function handleState() {
      const bookmarked = await Axios.get(
        "http://localhost:5000/users/loadsaved",
        {
          headers: { "x-auth-token": token },
        }
      );
      setState(bookmarked.data.savedPost);
    }

    handleState();
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
