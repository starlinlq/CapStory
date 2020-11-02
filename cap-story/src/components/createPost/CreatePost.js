import React, { useState } from "react";
import { savePost } from "../../axios/getData";
import { useSelector } from "react-redux";
import {
  Section,
  Input,
  Label,
  Form,
  FormButton,
  TextArea,
  TopicButton,
} from "./CreatePost.elements";
import { set } from "mongoose";

function CreatePost() {
  const token = useSelector((state) => state.user.token);

  const [
    data = {
      date: "",
      author: "",
      imgUrl: "",
      title: "",
      story: "",
      topic: "other",
    },
    setData,
  ] = useState();

  function handleAuthor(e) {
    setData({ ...data, author: e.target.value });
  }

  function setTopic(selectedTopic) {
    setData({ ...data, topic: selectedTopic });
  }

  function handleTitle(e) {
    setData({ ...data, title: e.target.value });
  }

  function handleImgUrl(e) {
    setData({ ...data, imgUrl: e.target.value });
  }
  function handleStory(e) {
    setData({ ...data, story: e.target.value });
  }

  console.log(data);
  function handleForm(e) {
    var today = new window.Date();
    var newDate =
      today.getMonth() +
      "-" +
      (today.getDate() + 1) +
      "-" +
      today.getFullYear();

    savePost({
      post: {
        date: newDate,
        author: data.author,
        imgUrl: data.imgUrl,
        title: data.title,
        story: data.story,
        topic: data.topic,
      },
      token,
    });
    setData({
      author: "",
      imgUrl: "",
      title: "",
      story: "",
    });
    e.preventDefault();
  }
  return (
    <Form onSubmit={handleForm}>
      <Section>
        <Label>author</Label>
        <Input value={data.author} onChange={handleAuthor} />
      </Section>
      <Section>
        <Label>Image url</Label>
        <Input value={data.imgUrl} onChange={handleImgUrl} />
      </Section>
      <Section>
        <Label>title</Label>
        <Input value={data.title} onChange={handleTitle} />
      </Section>
      <Section>
        <Label>Topic</Label>
        <TopicButton onClick={() => setTopic("nature")}>Nature</TopicButton>
        <TopicButton onClick={() => setTopic("city")}>City</TopicButton>
        <TopicButton onClick={() => setTopic("sci-fi")}>Sci-Fi</TopicButton>
        <TopicButton onClick={() => setTopic("life")}>Life</TopicButton>
        <TopicButton onClick={() => setTopic("universe")}>Universe</TopicButton>
        <TopicButton onClick={() => setTopic("other")}>Other</TopicButton>
      </Section>
      <Section>
        <Label>Story</Label>
        <TextArea
          value={data.story}
          onChange={handleStory}
          rows="10"
          cols="50"
        />
      </Section>
      <Section>
        <FormButton to="/">Submit</FormButton>
      </Section>
    </Form>
  );
}

export default CreatePost;
