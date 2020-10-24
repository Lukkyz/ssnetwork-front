import { REFRESH, SIGNIN, LOGIN } from "../actions/userType";

const isLogged = localStorage.getItem("isLogged") && localStorage.getItem("isLogged") === "true" ? true : false

const initial = {
  logged: isLogged,
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
