import React, { Suspense } from "react";
import UserAuthorizationContextComponent from "../components/context/AuthenticateUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Header = React.lazy(() => import("../components/Header/Header"));
const SignUp = React.lazy(() => import("../components/SignUp/SignUp"));
const Login = React.lazy(() => import("../components/Login/Login"));
const Home = React.lazy(() => import("../components/Home/Home"));

/** use React.Lazy */

function MainRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <UserAuthorizationContextComponent>
          <Header />
          <Switch>
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/sign-in' component={Login} />
            <Route exact path='/home' component={Home} />
            <Route path='/' component={SignUp} />
          </Switch>
        </UserAuthorizationContextComponent>
      </Suspense>
    </Router>
  );
}

export default MainRouter;
