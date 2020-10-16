import { REFRESH, SIGNIN, LOGIN } from "../actions/userType";

const initial = {
  logged: false,
};

const user = (state = initial, action) => {
  switch (action.type) {
    case SIGNIN:
      return state;
    case LOGIN:
      const payload = action.payload;
      return {
        ...state,
        logged: true,
        ...payload,
      };
    case REFRESH:
      const data = action.payload;
      return {
        ...state,
        logged: true,
        ...data,
      };

    default:
      return state;
  }
};

export default user;
