import React, { useState } from "react";
import {
  Section,
  Input,
  Label,
  Form,
  FormButton,
  TextArea,
} from "./CreatePost.elements";
import { Button } from "../../global/globalStyles";

function CreatePost() {
  const [
    data = {
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
    console.log(data);
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
        <FormButton>Submit</FormButton>
      </Section>
    </Form>
  );
}

export default CreatePost;
