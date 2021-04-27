import axios from "axios";
import { setData } from "../globalStore/actionCreator";
const auth = localStorage.getItem("Authorization");
export const savePost = ({ post, token }) => {
  axios
    .post("http://127.0.0.1:3333/api/post/create", post, {
      headers: { Authorization: auth },
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message));
};

export const loadData = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:3333/api/post", {
        headers: { Authorization: auth },
      })
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
