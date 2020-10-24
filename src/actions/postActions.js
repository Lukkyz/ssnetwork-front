import axios from "axios";
import store from "../store";
import { ADD } from "./postType";

export const add = (post) => (dispatch) => {
  post.userId = store.getState().users.userId;
  axios
    .post("http://localhost:3000/posts", post)
    .then((post) =>
      dispatch({
        type: ADD,
        payload: post.data,
      })
    )
    .catch();
};
