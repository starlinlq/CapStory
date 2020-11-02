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

function DisplayAccount() {
  let state = useSelector((data) => data.content);
  let user = useSelector((data) => data.user.id);
  let userData = state.filter((data) => data.userId === user);

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
              <Edit to={`/update/${data._id}`}>Edit</Edit>
              <Delete>Delete</Delete>
            </Section>
          </Options>
        ))}
      </Body>
    </>
  );
}

export default DisplayAccount;
