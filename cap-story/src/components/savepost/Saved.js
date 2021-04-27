import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsBookmarkPlus } from "react-icons/bs";
import { ImBookmark } from "react-icons/im";
import { IconWrapper, SaveWrapper, ShowSave, Container } from "./save.elements";
import axios from "axios";

const Saved = ({ userId, postId, item }) => {
  const [bookmarked, setBookmared] = useState(false);

  const isAuthenticated = useSelector((data) => data.user.isAuthenticated);
  const Authorization = localStorage.getItem("Authorization");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3333/api/post/${postId}/bookmark/validate`, {
        headers: { Authorization },
      })
      .then((res) => {
        setBookmared(res.data.bookmark);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSave = async () => {
    if (bookmarked) {
      axios
        .delete(`http://127.0.0.1:3333/api/post/${postId}/bookmark`, {
          headers: { Authorization },
        })
        .then((res) => setBookmared(!bookmarked))
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(
          `http://127.0.0.1:3333/api/post/${postId}/bookmark`,
          { data: "something" },
          {
            headers: { Authorization },
          }
        )
        .then((res) => {
          setBookmared(!bookmarked);
        })
        .catch((err) => console.log(err));
    }
    return;
  };

  return (
    <Container isAuthenticated={isAuthenticated}>
      <SaveWrapper>
        {bookmarked ? (
          <ShowSave>Delete Memory</ShowSave>
        ) : (
          <ShowSave>Save memory</ShowSave>
        )}
      </SaveWrapper>
      <IconWrapper onClick={handleSave}>
        {bookmarked ? <ImBookmark /> : <BsBookmarkPlus />}
      </IconWrapper>
    </Container>
  );
};

export default Saved;
