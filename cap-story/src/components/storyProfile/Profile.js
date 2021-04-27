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
    let auth = localStorage.getItem("Authorization");
    Axios.get(`http://127.0.0.1:3333/api/user/profile/${userId}`, {
      headers: { Authorization: auth },
    })
      .then((res) =>
        setUserdata({
          name: res.data.profile.name,
          photoUrl: res.data.profile.photourl,
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
