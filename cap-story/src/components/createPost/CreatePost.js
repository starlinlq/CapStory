import React, { useState } from "react";
import { savePost } from "../../axios/getData";
import {
  Section,
  Input,
  Label,
  Form,
  FormButton,
  TextArea,
} from "./CreatePost.elements";

function CreatePost() {
  var today = new window.Date();
  var newDate =
    today.getMonth() + "-" + (today.getDate() + 1) + "-" + today.getFullYear();

  const [
    data = {
      date: newDate,
      author: "",
      imgUrl: "",
      title: "",
      story: "",
    },
    setData,
  ] = useState();

  function handleAuthor(e) {
    setData({ ...data, author: e.target.value });
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
  function handleForm(e) {
    savePost(data);
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
