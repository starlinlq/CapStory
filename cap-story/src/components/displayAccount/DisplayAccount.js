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
} from "./displayAccount.elemens";
import Card from "../cardSection/Card";
import { loadingUser } from "../../globalStore/auth/AuthActions";
import { removeStory } from "../../axios/getData";

function DisplayAccount() {
  let state = useSelector((data) => data.content);
  let user = useSelector((data) => data.user.id);
  let userData = state.filter((data) => data.userId === user);
  console.log(userData);

  function deletePost(post) {
    let token = localStorage.getItem("auth-token");
    const data = { token, post };
    removeStory(data);
    console.log(token);
  }

  return (
    <>
      <Header>
        <HeadBody>My Stories</HeadBody>
        <HeadBody>Liked Stories</HeadBody>
      </Header>
      <Body>
        {userData.map((data) => (
          <Options>
            <Section>
              <Img url={data.imgUrl} />
            </Section>
            <Section>{data.title}</Section>
            <Section>Visited</Section>
            <Section>Comments</Section>
            <Section>
              <Edit to={`/create/${data._id}`}>Edit</Edit>
              <Delete onClick={() => deletePost(data._id)}>Delete</Delete>
            </Section>
          </Options>
        ))}
      </Body>
    </>
  );
}

export default DisplayAccount;
