import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  Header,
  Section,
  Body,
  Title,
  Content,
  CommentSection,
  Input,
  CreateComment,
  TextArea,
  Button,
  DisplayComment,
  Form,
  CommentTitle,
  CommentContent,
  ComentAuthor,
  CommentDate,
} from "./singleStory.elements";
function SingleStory({ match }) {
  const [newComment, setNewComment] = useState(false);
  const state = useSelector((state) => state.content);
  const userName = useSelector((state) => state.user.user);
  const userId = useSelector((state) => state.user.id);
  const id = match.params.id;
  const data = state.filter((item) => item._id === id).map((item) => item);
  const { register, handleSubmit, errors } = useForm();
  const newDate = new Date();
  const createdAt = `${newDate.getMonth()}/${newDate.getDay()}/${newDate.getFullYear()}`;

  const comments = [];

  function handleComment({ title, comment }) {
    const userComment = {
      title,
      comment,
      userName,
      createdAt: createdAt,
      userId,
      postId: id,
    };
    comments.push(userComment);
  }

  return (
    <>
      {data.map((item) => (
        <Section>
          <Header imgUrl={item.imgUrl}></Header>
          <Body>
            <Title>{item.title}</Title>
            <Content>{item.story}</Content>
          </Body>
          <CommentSection>
            <CreateComment>
              {newComment ? (
                <>
                  {" "}
                  <Form onSubmit={handleSubmit(handleComment)}>
                    <Input placeholder="title" ref={register} name="title" />
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
            <DisplayComment></DisplayComment>
          </CommentSection>
        </Section>
      ))}
    </>
  );
}

export default SingleStory;
