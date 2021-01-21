import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loader, Footer } from "./components";

const Login = lazy(() => import("./pages/Login/Login"));
const Chats = lazy(() => import("./pages/Chats/Chats"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/chats" component={Chats} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
