import axios from "axios";
import { setData } from "../globalStore/actionCreator";

export const savePost = ({ post, token }) => {
  console.log(post);
  axios
    .post("http://localhost:5000/posts/", post, {
      headers: { "x-auth-token": token },
    })
    .catch((err) => console.log(err.message));
};

export const loadData = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/posts/all")
      .then((res) => {
        console.log(res);
        dispatch(setData(res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const removeStory = ({ token, post }) => {
  axios
    .delete("http://localhost:5000/posts/delete", {
      headers: { "x-auth-token": token, postId: post },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
