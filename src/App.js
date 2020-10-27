import React from "react";
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Account from "./components/account";
import PostsContainer from "./containers/PostsContainer";
import { CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { refresh } from "./actions/userActions";
import PrivateRoute from "./middleware/PrivateRoute";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  componentWillMount() {
    store
      .dispatch(refresh())
      .then()
      .catch(() => {
        this.setState({ redirect: true });
      });
  }
  redirect = () => {
    if (this.state.redirect) {
      localStorage.setItem("isLogged", false);
      return <Redirect to="/login" />;
    }
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.redirect()}
        <CSSReset />
        <Provider store={store}>
          <Router>
            <Route path="/login" component={Account} exact />
            <PrivateRoute path="/" component={PostsContainer} />
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
