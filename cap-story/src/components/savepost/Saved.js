import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsBookmarkPlus } from "react-icons/bs";
import { ImBookmark } from "react-icons/im";
import { IconWrapper, SaveWrapper, ShowSave, Container } from "./save.elements";
import { savedMemory, removeSaveMemory } from "../../globalStore/actionCreator";
import Axios from "axios";

const Saved = ({ userId, postId, item }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [savedData, setSavedData] = useState([]);
  const token = useSelector((data) => data.user.token);
  const isAuthenticated = useSelector((data) => data.user.isAuthenticated);

  useEffect(() => {
    async function setData() {
      if (isAuthenticated) {
        const userData = await Axios.get(
          "http://localhost:5000/users/loadsaved",
          { headers: { "x-auth-token": token } }
        ).catch((err) => console.log(err));
        setSavedData(userData.data.savedPost);
      }
    }
    setData();
  }, [isAuthenticated, token]);

  useEffect(() => {
    function handleSaved() {
      if (isAuthenticated) {
        const found = savedData.filter((data) => data._id === postId);
        if (found.length !== 0) {
          setIsSaved(true);
        }
      }
    }
    handleSaved();
  }, [postId, isAuthenticated, savedData]);

  const handleSave = async () => {
    if (isSaved) {
      const data = await removeSaveMemory(userId, postId, token);
      console.log(data.savedPost);
      setSavedData(data.savedPost);
      setIsSaved(!isSaved);
    } else {
      const data = await savedMemory(userId, item, token);
      setSavedData(data.savedPost);
      setIsSaved(!isSaved);
    }
    return;
  };

  console.log(savedData);

  return (
    <Container isAuthenticated={isAuthenticated}>
      <SaveWrapper>
        {isSaved ? (
          <ShowSave>Delete Memory</ShowSave>
        ) : (
          <ShowSave>Save memory</ShowSave>
        )}
      </SaveWrapper>
      <IconWrapper onClick={handleSave}>
        {isSaved ? <ImBookmark /> : <BsBookmarkPlus />}
      </IconWrapper>
    </Container>
  );
};

export default Saved;
