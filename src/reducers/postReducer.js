import { ADD, GET_ALL } from "../actions/postType";

const posts = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const post = action.payload;
      return [post, ...state];
    case GET_ALL:
      const posts = action.payload;
      return [...state, ...posts];
    default:
      return state;
  }
};

export default posts;
