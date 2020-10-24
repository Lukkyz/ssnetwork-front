import axios from "axios";
import { REFRESH, SIGNIN, LOGIN } from "./userType";

export const login = (user) => (dispatch) => {
  return new Promise(function (resolve, reject) {
    axios
      .post("http://localhost:3000/users/login", user)
      .then((user) => {
        dispatch({
          type: LOGIN,
          payload: user.data,
        });
        localStorage.setItem("isLogged", true);
        resolve(user);
      })
      .catch((err) => {
        reject();
      });
  });
};

export const refresh = () => (dispatch) => {
  return new Promise(function (resolve, reject) {
    axios
      .post("http://localhost:3000/users/refresh_token")
      .then((user) => {
        dispatch({
          type: REFRESH,
          payload: user.data,
        });
        localStorage.setItem("isLogged", true);
        resolve();
      })
      .catch((err) => {
        reject();
      });
  });
};

export const createUser = (user) => (dispatch) => {
  axios.post("http://localhost:3000/users", user).then((user) => {
    dispatch({
      type: SIGNIN,
      payload: user.data,
    });
    const { email, password } = user.data;
    const userCredentials = { email, password };
    dispatch(login(userCredentials));
  });
};
