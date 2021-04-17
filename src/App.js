import React, { Suspense } from "react";
import { Route, Switch } from "react-router";

import Loading from "./Components/Loading/Loading";
import Login from "./Container/Auth/Auth";
import Home from "./Container/Home/Home";

import "./App.css";

const App = () => (
  <div className="app">
    <Suspense fallback={<Loading delay={250} />}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/loading" component={Loading} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
