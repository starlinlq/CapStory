import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Photo,
  PhotoWrapper,
  UserNameWrapper,
  UserName,
  Container,
} from "./profile.elements";

const Profile = ({ userId }) => {
  const [userData = { name: "", photoUrl: "" }, setUserdata] = useState();

  useEffect(() => {
    Axios.post("http://localhost:5000/users/info", { userId: userId })
      .then((res) =>
        setUserdata({
          ...userData,
          name: res.data.displayName,
          photoUrl: res.data.photoUrl,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <PhotoWrapper to={`/user/${userId}`}>
        <Photo url={userData.photoUrl} />
      </PhotoWrapper>
      <UserNameWrapper>
        <UserName>{userData.name}</UserName>
      </UserNameWrapper>
    </Container>
  );
};

export default Profile;
