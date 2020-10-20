import axios from "axios";
import { setData } from "../globalStore/actionCreator";

export const savePost = (newData) => {
  console.log(newData);
  axios
    .post("http://localhost:3000/data/", newData)
    .then((res) => console.log(res));
};

export const loadData = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/data/")
      .then((res) => {
        dispatch(setData(res.data));
      })
      .catch((err) => console.log(err));
  };
};
