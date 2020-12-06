import React, { useState, useEffect } from "react";
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
  Menu,
  Nature,
  City,
  SciFi,
  Life,
  Universe,
  Other,
  FormWrapper,
} from "./CreatePost.elements";

import Progressbar from "../progressBar/ProgressBar";

function CreatePost({ match }) {
  const [
    active = {
      nature: false,
      city: false,
      sciFi: false,
      life: false,
      universe: false,
      other: false,
    },
    setActive,
  ] = useState();
  const token = useSelector((state) => state.user.token);
  const [update, setUpdate] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const test = useSelector((test) => test.url.url);

  const modifyStory = useSelector((story) => story.content).filter(
    (data) => data._id === match.params.id
  );

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

  const [singleStory] = modifyStory;

  useEffect(() => {
    if (match.params.id && singleStory) {
      setUpdate(true);
      setData({
        ...data,
        author: singleStory.author,
        imgUrl: singleStory.imgUrl,
        title: singleStory.title,
        story: singleStory.story,
      });
    } else {
      setUpdate(false);
      setData({
        author: "",
        imgUrl: "",
        title: "",
        story: "",
      });
    }
  }, [singleStory]);

  function handleAuthor(e) {
    setData({ ...data, author: e.target.value });
  }

  function setTopic(selectedTopic) {
    switch (selectedTopic) {
      case "nature": {
        setActive({
          ...active,
          nature: true,
          city: false,
          sciFi: false,
          life: false,
          universe: false,
          other: false,
        });
        break;
      }
      case "city": {
        setActive({
          ...active,
          nature: false,
          city: true,
          sciFi: false,
          life: false,
          universe: false,
          other: false,
        });
        break;
      }
      case "sci-fi": {
        setActive({
          ...active,
          nature: false,
          city: false,
          sciFi: true,
          life: false,
          universe: false,
          other: false,
        });
        break;
      }
      case "universe": {
        setActive({
          ...active,
          universe: true,
          city: false,
          sciFi: false,
          life: false,
          other: false,
          nature: false,
        });
        break;
      }
      case "other": {
        setActive({
          ...active,
          universe: false,
          city: false,
          sciFi: false,
          life: false,
          other: true,
          nature: false,
        });
        break;
      }
      case "life": {
        setActive({
          ...active,
          nature: false,
          universe: false,
          city: false,
          sciFi: false,
          life: true,
          other: false,
        });
        break;
      }
      default:
        break;
    }
    setData({ ...data, topic: selectedTopic });
  }

  function handleTitle(e) {
    setData({ ...data, title: e.target.value });
  }

  function handleImgUrl(e) {
    const types = ["image/png", "image/jpeg", "image/jpg"];
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png, jpeg or jpg)");
    }
  }
  function handleStory(e) {
    setData({ ...data, story: e.target.value });
  }

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
        imgUrl: test,
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
    <FormWrapper>
      <Form onSubmit={handleForm}>
        <Section>
          <Label>author</Label>
          <Input value={data.author} onChange={handleAuthor} />
        </Section>
        <Section>
          <Label>Image</Label>
          <Input type="file" onChange={handleImgUrl} />

          {file && <Progressbar file={file} setFile={setFile} />}
          {error && (
            <Label>Please select an image file (png, jpeg or jpg)</Label>
          )}
        </Section>
        <Section>
          <Label>title</Label>
          <Input value={data.title} onChange={handleTitle} />
        </Section>
        <Menu>
          <Label>Topic</Label>
          <Nature active={active} onClick={() => setTopic("nature")}>
            Nature
          </Nature>
          <City active={active} onClick={() => setTopic("city")}>
            City
          </City>
          <SciFi active={active} onClick={() => setTopic("sci-fi")}>
            Sci-Fi
          </SciFi>
          <Life active={active} onClick={() => setTopic("life")}>
            Life
          </Life>
          <Universe active={active} onClick={() => setTopic("universe")}>
            Universe
          </Universe>
          <Other active={active} onClick={() => setTopic("other")}>
            Other
          </Other>
        </Menu>
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
          {update ? (
            <FormButton>Update</FormButton>
          ) : (
            <FormButton>Submit</FormButton>
          )}
        </Section>
      </Form>
    </FormWrapper>
  );
}

export default CreatePost;
