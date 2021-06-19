import React from "react";
import UserAuthorizationContextComponent from "../components/context/AuthenticateUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header/Header";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";

function MainRouter() {
  return (
    <Router>
      <UserAuthorizationContextComponent>
        <Header />
        <Switch>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/' component={SignUp} />
        </Switch>
      </UserAuthorizationContextComponent>
    </Router>
  );
}

export default MainRouter;
