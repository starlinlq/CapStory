import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import {
  Photo,
  PhotoWrapper,
  UserNameWrapper,
  UserName,
  Container,
} from "./profile.elements";

const Profile = ({ userId, switchDiv }) => {
  const [userData, setUserdata] = useState({});

  useEffect(() => {
    Axios.post("", { userId: userId })
      .then((res) =>
        setUserdata({
          name: res.data.displayName,
          photoUrl: res.data.photoUrl,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  return (
    <Container>
      <PhotoWrapper switchDiv={switchDiv}>
        <Photo url={userData.photoUrl} switchDiv={switchDiv} />
      </PhotoWrapper>
      <UserNameWrapper switchDiv={switchDiv}>
        <UserName>{userData.name}</UserName>
      </UserNameWrapper>
    </Container>
  );
};

export default Profile;
