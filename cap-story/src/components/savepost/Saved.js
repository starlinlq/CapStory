import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsBookmarkPlus } from "react-icons/bs";
import { ImBookmark } from "react-icons/im";
import { IconWrapper, SaveWrapper, ShowSave, Container } from "./save.elements";
import { savedMemory, removeSaveMemory } from "../../globalStore/actionCreator";

const Saved = ({ userId, postId, item }) => {
  const [isSaved, setIsSaved] = useState(false);
  const token = useSelector((data) => data.user.token);
  const userSaved = useSelector((data) => data.user.savedPost);
  const isAuthenticated = useSelector((data) => data.user.isAuthenticated);

  useEffect(() => {
    if (userSaved && isAuthenticated) {
      userSaved.map((data) => {
        if (data._id === postId) {
          setIsSaved(true);
        }
        return null;
      });
    }
  }, [userSaved, postId, isAuthenticated]);

  const handleSave = () => {
    if (isSaved) {
      removeSaveMemory(userId, postId, token);
      setIsSaved(!isSaved);
    } else {
      savedMemory(userId, item, token);
      setIsSaved(!isSaved);
    }
    return;
  };

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
