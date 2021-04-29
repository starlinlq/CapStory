import React, { useState, useEffect } from "react";
import Profile from "../storyProfile/Profile";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { BsTrash } from "react-icons/bs";
import Saved from "../savepost/Saved";

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
  Container,
  ProfileWrapper,
  ProfileLink,
  Wrapper,
  CommentWrapper,
} from "./singleStory.elements";
import { postComment, removeComment } from "../../globalStore/actionCreator";
import axios from "axios";
function SingleStory({ match }) {
  const [newComment, setNewComment] = useState(false);
  const [state = { post: [], comments: [] }, setState] = useState();
  const userId = useSelector((state) => state.user.id);
  const id = match.params.id;
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const userAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const Authorization = localStorage.getItem("Authorization");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3333/api/post/${id}`)
      .then((res) => {
        console.log(res.data);
        setState({
          ...state,
          post: [...res.data.post],
          comments: res.data.post[0].comment,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleComment({ comment }) {
    setNewComment(false);

    axios
      .post(
        `http://127.0.0.1:3333/api/post/${id}/comment`,
        { comment },
        { headers: { Authorization } }
      )
      .then((res) => {
        setState({ ...state, comments: res.data.currentComments });
      })
      .catch((err) => console.log(err));
  }

  const deleteComment = (c_id) => {
    console.log(c_id);
    axios
      .delete(`http://127.0.0.1:3333/api/post/comment/${c_id}`, {
        headers: { Authorization },
      })
      .then((res) => setState({ ...state, comments: res.data.comments }))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      {state.post.map((story) => (
        <Section key={story.id}>
          <Header imgUrl={story.image}></Header>
          <Body>
            <Title>{story.title}</Title>
            <ProfileWrapper isAuthenticated={userAuthenticated}>
              <ProfileLink>
                <Wrapper to={`/user/${story.user_id}`}></Wrapper>
                <Profile userId={story.user_id} />
              </ProfileLink>
              <Saved userId={story.user_id} postId={story.id} />
            </ProfileWrapper>
            <Content>{story.story}</Content>
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
        {state.comments.map((data) => (
          <DisplayComment key={data.id}>
            <CommentHead>
              <ComentAuthor to={`/user/${data.user_id}`}>
                <Profile userId={data.user_id} />
              </ComentAuthor>
              <CommentDate>{data.created_at.slice(0, 11)}</CommentDate>
              {userAuthenticated && data.user_id === userId && (
                <Delete onClick={() => deleteComment(data.id)}>
                  <BsTrash />
                </Delete>
              )}
            </CommentHead>
            <CommentContent>{data.comment}</CommentContent>
          </DisplayComment>
        ))}
      </Section>
    </Container>
  );
}

export default SingleStory;
