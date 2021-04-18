import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";

import Loading from "./Components/Loading/Loading";
import Login from "./Container/Auth/Auth";
import Home from "./Container/Home/Home";

import "./App.css";
import { auth } from "./api/firebase";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Suspense fallback={<Loading delay={250} />}>
        {!user ? (
          <Switch>
            <Login />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Redirect from="/" to="/home" />
          </Switch>
        )}
      </Suspense>
    </div>
  );
};

export default App;
