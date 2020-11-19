import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Section,
  Header,
  Body,
  HeadBody,
  Options,
  Delete,
  Edit,
  Img,
  LinkComp,
  Title,
  P,
  Button,
  ConfirmDelete,
  Container,
} from "./displayAccount.elemens";
import Card from "../cardSection/Card";
import { loadingUser } from "../../globalStore/auth/AuthActions";
import { removeStory } from "../../axios/getData";

function DisplayAccount() {
  let state = useSelector((data) => data.content);
  let user = useSelector((data) => data.user.id);
  let userData = state.filter((data) => data.userId === user);
  const [center, setCenter] = useState(true);
  let commentCount = useSelector((state) => state.comments);
  const [deleteMemory, setDeleteMemory] = useState(false);
  const [idOfMemory, setIdOfMemory] = useState(null);
  console.log(commentCount);

  function cancelDelete() {
    setDeleteMemory(false);
  }

  function confirmDelete(id) {
    setDeleteMemory(true);
    setIdOfMemory(id);
  }

  function removeMemory() {
    let token = localStorage.getItem("auth-token");
    const data = { token, post: idOfMemory };
    removeStory(data);
    setDeleteMemory(false);
    setIdOfMemory(null);
  }

  return (
    <Container>
      <Header>
        <HeadBody>MEMORIES</HeadBody>
      </Header>
      <Body>
        {userData.map((data) => (
          <Options key={data._id}>
            <Section>
              <Img url={data.imgUrl} />
            </Section>
            <Section>
              <Title>{data.title}</Title>
            </Section>
            <Section>
              <LinkComp to={`/create/${data._id}`}>
                <Edit>Edit</Edit>
              </LinkComp>
              <Delete onClick={() => confirmDelete(data._id)}>Delete</Delete>
            </Section>
          </Options>
        ))}
      </Body>
      <ConfirmDelete display={deleteMemory}>
        <P>Are you sure you want to delete this memory?</P>
        <Button onClick={removeMemory}>Yes</Button>
        <Button onClick={cancelDelete}>No</Button>
      </ConfirmDelete>
    </Container>
  );
}

export default DisplayAccount;
