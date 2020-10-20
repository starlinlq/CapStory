import { ADD_POST } from "./actionsNames";

export const newPost = (data) => {
  return {
    type: ADD_POST,
    payLoad: {
      url: data.url,
      title: data.title,
      content: data.content,
      author: data.author,
      date: data.date,
    },
  };
};
