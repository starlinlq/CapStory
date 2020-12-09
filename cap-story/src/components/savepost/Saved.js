import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsBookmarkPlus } from "react-icons/bs";
import { ImBookmark } from "react-icons/im";
import { IconWrapper } from "./save.elements";
import { savedMemory, removeSaveMemory } from "../../globalStore/actionCreator";

const Saved = ({ userId, postId }) => {
  const [isSaved, setIsSaved] = useState(false);
  const token = useSelector((data) => data.user.token);
  const userSaved = useSelector((data) => data.user.savedPost);
  console.log(userSaved);

  useEffect(() => {
    if (userSaved) {
      userSaved.map((data) => {
        if (data.postId === postId) {
          setIsSaved(true);
        }
        return null;
      });
    }
  }, [userSaved, postId]);

  const handleSave = () => {
    if (isSaved) {
      removeSaveMemory(userId, postId, token);
      setIsSaved(!isSaved);
    } else {
      savedMemory(userId, postId, token);
      setIsSaved(!isSaved);
    }
    return;
  };

  return (
    <IconWrapper onClick={handleSave}>
      {isSaved ? <ImBookmark /> : <BsBookmarkPlus />}
    </IconWrapper>
  );
};

export default Saved;
