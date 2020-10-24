import { ADD, GET_ALL } from "../actions/postType";

const posts = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const post = action.payload;
      return [...state, post];
    default:
      return state;
  }
};

export default posts;
