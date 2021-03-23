import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Login from "./components/PsuLogin";
import "./App.css";
import Main from "./components/Main";
import Admin from "./components/Admin";
import { history } from "./_helpers/History";
import { Switch, Route, Router } from "react-router-dom";

import "antd/dist/antd.css";

function App() {
  return (
    <div className="">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
