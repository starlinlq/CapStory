import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { handleUserUpdate } from "../../globalStore/actionCreator";
import Progressbar from "../progressBar/ProgressBar";
import axios from "axios";
import { cardDataTwo } from "../Home/Data";
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
import { loadingUser } from "../../globalStore/auth/AuthActions";
import Card from "../cardSection/Card";

function DisplayUser({ match }) {
  const [userPost, setUserPost] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { register, errors, handleSubmit } = useForm();
  const [edit, setEdit] = useState(false);
  const userId = useSelector((data) => {
    return { userId: data.user.id, token: data.user.token };
  });
  const dispatch = useDispatch();
  const photoUrl = useSelector((data) => data.url);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const isUserAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );

  useEffect(() => {
    let auth = localStorage.getItem("Authorization");
    axios
      .get(`http://127.0.0.1:3333/api/user/profile/${match.params.id}}`, {
        headers: { Authorization: auth },
      })
      .then((res) => {
        console.log(res);
        setDisplayData([res.data.profile]);
        setUserPost([...res.data.posts]);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

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
    //this is wrong, going to make a update with redux instead
    setDisplayData([{ ...data, photoUrl: photoUrl.url }]);
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
      {displayData.map((data, index) => (
        <Header key={index}>
          <PhotoSec>
            <Img url={data.photourl} />
          </PhotoSec>
          <BioSec>
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
          </BioSec>
          {isUserAuthenticated && userId.userId === data.user_id && (
            <Button onClick={makeChange}>Edit Bio</Button>
          )}
        </Header>
      ))}
      ;
      <BodySection>
        {displayData.map((data, index) => (
          <BodyHeader key={index}>{data.name + " Memories"}</BodyHeader>
        ))}
        <Card state={userPost} size={cardDataTwo} />
      </BodySection>
      <EditComment edit={edit} ref={wrapperRef}>
        <EditBody onSubmit={handleSubmit(saveChange)}>
          <Label>Name</Label>
          <Input
            placeholder="name"
            name="name"
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.name && "name is required"}
          <Label>Photo</Label>
          <Input type="file" onChange={handleImgUrl} />
          {file && <Progressbar file={file} setFile={setFile} />}
          {error && (
            <Label>Please select an image file (png, jpeg or jpg)</Label>
          )}
          <Label>Bio</Label>
          <TextArea
            rows="5"
            name="bio"
            ref={register({ required: true, maxLenght: 500 })}
          />
          {errors.bio && "bio is required"}

          <Label>Location</Label>
          <Input
            placeholder="Location"
            name="location"
            ref={register({ required: true, maxLenght: 25 })}
          />
          {errors.location && "location is required"}

          <Label>Interest</Label>
          <Input
            placeholder="Interest"
            name="interest"
            ref={register({ required: true, maxLength: 100 })}
          />
          {errors.interest && "interest is required"}
          <SaveButton>Save Changes</SaveButton>
        </EditBody>
      </EditComment>
    </MainSec>
  );
}

export default DisplayUser;
