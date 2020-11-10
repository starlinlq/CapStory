import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { handleUserUpdate } from "../../globalStore/actionCreator";
import Progressbar from "../progressBar/ProgressBar";
import axios from "axios";
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
  CancelButton,
} from "./displayUser.elements";
import Card from "../cardSection/Card";
import { set } from "mongoose";
import Axios from "axios";

function DisplayUser({ match }) {
  const [displayData, setDisplayData] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const [edit, setEdit] = useState(false);
  const state = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const userId = useSelector((data) => {
    return { userId: data.user.id, token: data.user.token };
  });
  const photoUrl = useSelector((data) => data.url);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const displayUserId = match.params.id;
  const isUserAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );

  useEffect(() => {
    axios
      .post("http://localhost:5000/users/info", { userId: displayUserId })
      .then((res) => {
        setDisplayData([res.data]);
      })
      .catch((err) => console.log(err));
  }, [displayUserId]);

  const userData = useSelector((data) => [
    {
      name: data.user.name,
      bio: data.user.bio,
      location: data.user.location,
      interest: data.user.interest,
      imgUlr: data.user.photoUrl,
    },
  ]);

  function makeChange() {
    setEdit(true);
  }
  function handleImgUrl(e) {
    const types = ["image/png", "image/jpeg", "image/jpg"];
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png, jpeg or jpg)");
    }
  }

  function saveChange(updateData) {
    const data = { ...updateData, ...userId, photoUrl };
    dispatch(handleUserUpdate(data));
    setDisplayData([{ ...data, photoUrl: photoUrl.url }]);
    setEdit(false);
  }

  function handleCancel() {
    setEdit(false);
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setEdit(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <MainSec>
      {displayData.map((data) => (
        <Header>
          <PhotoSec>
            <Img url={data.photoUrl} />
          </PhotoSec>
          <BioSec>
            <>
              <Section>
                <UserName>{data.name}</UserName>
              </Section>
              <Section>
                <Title>Bio</Title>
                <Bio>{data.bio}</Bio>
              </Section>
              <Section>
                <Title>Location</Title>
                <Location>{data.location}</Location>
              </Section>
              <Section>
                <Title>Interest</Title>
                <Interest>{data.interest}</Interest>
              </Section>
            </>
          </BioSec>
          {isUserAuthenticated && userId.userId === displayUserId && (
            <Button onClick={makeChange}>Edit Bio</Button>
          )}
        </Header>
      ))}
      ;
      <BodySection>
        <BodyHeader>MEMORIES</BodyHeader>
        <Card state={state} />
      </BodySection>
      <EditComment edit={edit} ref={wrapperRef}>
        <EditBody onSubmit={handleSubmit(saveChange)}>
          <Label>Name</Label>
          <Input placeholder="name" name="name" ref={register} />
          <Label>Photo</Label>
          <Input type="file" onChange={handleImgUrl} />
          {file && <Progressbar file={file} setFile={setFile} />}
          {error && (
            <Label>Please select an image file (png, jpeg or jpg)</Label>
          )}
          <Label>Bio</Label>
          <TextArea rows="5" name="bio" ref={register} />
          <Label>Location</Label>
          <Input placeholder="Location" name="location" ref={register} />
          <Label>Interest</Label>
          <Input placeholder="Interest" name="interest" ref={register} />
          <SaveButton>Save Changes</SaveButton>
        </EditBody>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
      </EditComment>
    </MainSec>
  );
}

export default DisplayUser;
