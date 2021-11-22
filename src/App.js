import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, NavLink } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Kanban from "./pages/Kanban";

import "./App.css";

const App = ({ history }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const auth = getAuth();

      const data = await signInWithEmailAndPassword(auth, email, password);

      console.log("data ======> ", data);

      setUser(data.user);
      history.push("/kanban");
    } catch (err) {
      console.log("err ====> ", err);
    }
  };

  const register = async (email, password) => {
    try {
      const auth = getAuth();

      const data = await createUserWithEmailAndPassword(auth, email, password);

      console.log("data =====> ", data);

      setUser(data.user);
      history.push("/kanban");
    } catch (err) {
      console.log("err ====> ", err);
    }
  };

  const logout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        setUser(null);
        history.push("/");
      })
      .catch((err) => {
        console.log("err ====> ", err);
      });
  };

  return (
    <div className="App">
      <Navbar user={user} />
      <Route exact path="/login">
        <Login login={login} />
      </Route>
      <Route exact path="/register">
        <Register register={register} />
      </Route>
      <Route exact path="/logout" render={() => logout()} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Kanban">
          <Kanban />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
