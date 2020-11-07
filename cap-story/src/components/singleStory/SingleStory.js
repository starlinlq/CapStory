import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { BsTrash } from "react-icons/bs";
import {
  Header,
  Section,
  Body,
  Title,
  Content,
  CommentSection,
  CreateComment,
  TextArea,
  Button,
  DisplayComment,
  Form,
  CommentHead,
  CommentContent,
  ComentAuthor,
  CommentDate,
  CommentAuth,
  Login,
  CommentBody,
  Delete,
} from "./singleStory.elements";
import {
  postComment,
  getComments,
  removeComment,
} from "../../globalStore/actionCreator";
function SingleStory({ match }) {
  const [newComment, setNewComment] = useState(false);
  const state = useSelector((state) => state.content);
  const userName = useSelector((state) => state.user.user);
  const userId = useSelector((state) => state.user.id);
  const id = match.params.id;
  const { register, handleSubmit, errors } = useForm();
  const newDate = new Date();
  const createdAt = `${newDate.getMonth()}/${newDate.getDay()}/${newDate.getFullYear()}`;
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comments);
  const userAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    dispatch(getComments());
  }, []);

  /*  useEffect(() => {}, [commentData]); */

  function handleComment({ comment }) {
    setNewComment(false);

    const userComment = {
      comment,
      userName,
      createdAt: createdAt,
      userId,
      postId: id,
      token,
    };
    dispatch(postComment(userComment));
  }

  const deleteComment = (post_id) => {
    dispatch(removeComment(post_id, token));
  };

  return (
    <>
      {state
        .filter((item) => item._id === id)
        .map((item) => (
          <Section>
            <Header imgUrl={item.imgUrl}></Header>
            <Body>
              <Title>{item.title}</Title>
              <Content>{item.story}</Content>
            </Body>
          </Section>
        ))}
      <CommentSection>
        {userAuthenticated ? (
          <CreateComment>
            {newComment ? (
              <>
                {" "}
                <Form onSubmit={handleSubmit(handleComment)}>
                  <TextArea
                    rows="10"
                    cols="25"
                    placeholder="write comment"
                    ref={register}
                    name="comment"
                  />
                  <Button>Submit Comment</Button>
                </Form>{" "}
              </>
            ) : (
              <Button onClick={() => setNewComment(true)}>
                Comment Memory
              </Button>
            )}
          </CreateComment>
        ) : (
          <CommentAuth>
            <CommentBody>
              Please <Login to={`/login/${id}`}>Login</Login> to comment
            </CommentBody>
          </CommentAuth>
        )}
      </CommentSection>
      <Section>
        {commentData
          .filter((data) => data.postId === id)
          .map((data) => (
            <DisplayComment key={data._id}>
              <CommentHead>
                <ComentAuthor>{data.userName}</ComentAuthor>
                <CommentDate>{data.createdAt}</CommentDate>
                {userAuthenticated && data.userId === userId && (
                  <Delete onClick={() => deleteComment(data._id)}>
                    <BsTrash />
                  </Delete>
                )}
              </CommentHead>
              <CommentContent>{data.comment}</CommentContent>
            </DisplayComment>
          ))}
      </Section>
    </>
  );
}

export default SingleStory;
