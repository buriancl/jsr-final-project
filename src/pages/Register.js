import React, { useState } from "react";

const Register = ({ register }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit">Signup</button>
        </div>
        <div>
          Already have an account? <a href="/login">Login!</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
