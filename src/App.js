import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Account from "./components/account";
import Posts from "./components/Posts";
import { CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { refresh } from "./actions/userActions";
import "./App.css";

class App extends React.Component {
  componentWillMount() {
    store.dispatch(refresh());
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Provider store={store}>
          <Router>
            <Route path="/login" component={Account} exact />
            <Route path="/" component={Posts} />
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
