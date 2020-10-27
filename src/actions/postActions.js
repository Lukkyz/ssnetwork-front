import axios from "axios";
import store from "../store";
import { ADD, GET_ALL } from "./postType";

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

export const getPosts = () => (dispatch) => {
  axios
    .get("http://localhost:3000/posts")
    .then((posts) => {
      dispatch({
        type: GET_ALL,
        payload: posts.data,
      });
    })
    .catch();
};
