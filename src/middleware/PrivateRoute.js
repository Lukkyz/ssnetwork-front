import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../store"

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        store.getState().users.logged === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
