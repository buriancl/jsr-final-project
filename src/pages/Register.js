import React, { useState } from "react";
import "./Login.css";

const Register = ({ register }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <div className="authContainer">
      <form className="authForm" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div></div>
        <div>
          <button className="authBtn" type="submit">
            Signup
          </button>
        </div>
        <div className="authMessage">
          Already have an account?{" "}
          <a className="authSwitchLink" href="/login">
            Login!
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
