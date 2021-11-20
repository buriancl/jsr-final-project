import React from "react";
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

export default class App extends React.Component {
  state = {
    user: null,
  };

  login = async (existingUser) => {
    try {
      const auth = getAuth();

      const data = await signInWithEmailAndPassword(
        auth,
        existingUser.email,
        existingUser.password
      );

      console.log("data ======> ", data);

      this.setState(
        {
          user: data.user,
        },
        () => this.props.history.push("/kanban")
      );
    } catch (err) {
      console.log("err ====> ", err);
    }
  };

  register = async (newUser) => {
    try {
      const auth = getAuth();

      const data = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );

      console.log("data =====> ", data);

      this.setState({ user: data.user }, () =>
        this.props.history.push("/kanban")
      );
    } catch (err) {
      console.log("err ====> ", err);
    }
  };

  logout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        this.setState(
          {
            user: null,
          },
          () => this.props.history.push("/")
        );
      })
      .catch((err) => {
        console.log("err ====> ", err);
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar history={this.props.history} user={this.state.user} />
        <Route exact path="/login">
          <Login login={this.login} />
        </Route>
        <Route exact path="/register">
          <Register register={this.register} />
        </Route>
        <Route exact path="/logout" render={() => this.logout()} />
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
  }
}
