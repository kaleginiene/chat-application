import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Loader } from "./components";

const Login = lazy(() => import("./pages/Login/Login"));
const Chats = lazy(() => import("./pages/Chats/Chats"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/chats" component={Chats} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
