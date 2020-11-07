import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  PhotoSec,
  BioSec,
  Header,
  Img,
  Bio,
  Title,
  Location,
  Interest,
  UserName,
  Section,
  BodySection,
  BodyHeader,
  EditComment,
  Button,
  MainSec,
  Input,
  Label,
  EditBody,
  TextArea,
  SaveButton,
} from "./displayUser.elements";
import Card from "../cardSection/Card";

function DisplayUser() {
  const { register, handleSubmit, errors } = useForm();
  const [edit, setEdit] = useState(false);
  const state = useSelector((state) => state.content);

  function makeChange() {
    setEdit(true);
  }

  function saveChange() {
    setEdit(false);
  }

  function submitChange() {}
  return (
    <MainSec>
      <Header>
        <PhotoSec>
          <Img />
        </PhotoSec>
        <BioSec>
          <Section>
            <UserName>starlin leon</UserName>
          </Section>
          <Section>
            <Title>Bio</Title>
            <Bio>
              {" "}
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{" "}
            </Bio>
          </Section>
          <Section>
            <Title>Location</Title>
            <Location>Sacramento, California</Location>
          </Section>
          <Section>
            <Title>Interest</Title>
            <Interest>Gaming, Movies</Interest>
          </Section>
        </BioSec>
        <Button onClick={makeChange}>Edit Bio</Button>
      </Header>
      <BodySection>
        <BodyHeader>MEMORIES</BodyHeader>
        <Card state={state} />
      </BodySection>
      <EditComment edit={edit}>
        <EditBody>
          <Label>Name</Label>
          <Input placeholder="name" />
          <Label>Bio</Label>
          <TextArea rows="5" />
          <Label>Location</Label>
          <Input placeholder="Location" />
          <Label>Interest</Label>
          <Input placeholder="Interest" />
          <SaveButton onClick={saveChange}>Save Changes</SaveButton>
          <SaveButton onClick={saveChange}>Cancel</SaveButton>
        </EditBody>
      </EditComment>
    </MainSec>
  );
}

export default DisplayUser;
