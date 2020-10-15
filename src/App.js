import React from "react";
import { Switch, Route } from "react-router-dom";
import Account from "./components/account";
import { CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Switch>
        <Route path="/" component={Account} exact />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
