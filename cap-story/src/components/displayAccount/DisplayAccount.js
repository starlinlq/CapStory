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
  Visited,
  Comments,
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
  console.log(commentCount);

  function deletePost(post) {
    let token = localStorage.getItem("auth-token");
    const data = { token, post };
    removeStory(data);
  }

  return (
    <>
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
              <Delete onClick={() => deletePost(data._id)}>Delete</Delete>
            </Section>
          </Options>
        ))}
      </Body>
    </>
  );
}

export default DisplayAccount;
