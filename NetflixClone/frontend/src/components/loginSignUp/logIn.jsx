import React from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setToggleLoginSignUp }) => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    if (username === "admin" && password === "admin@123") {
      navigate("/", {replace: true});
    } else {
      // Handle incorrect username or password
    }
  };

  return (
    <div className="login-form-design">
      <span id="lg-header">Sign In</span>
      <form id="loginForm" onSubmit={handleSubmit}>
        <input
          className="inputs"
          id="lg-usname"
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          className="inputs"
          id="lg-pass"
          type="password"
          placeholder="Password"
          name="password"
        />
        <button
          className="submit-btn"
          type="submit"
        >
          <span>Sign In</span>
        </button>
      </form>

      <div className="helper-cont">
        <input type="checkbox" id="lg-checkbox" />
        <span id="rememberMe">Remember me</span>
        <span id="needHelp">Need help?</span>
      </div>

      <div className="switch-to-signUp">
        <span>New to Netflix?</span>
        <span
          style={{ marginLeft: "5px", color: "white", cursor: "pointer" }}
          onClick={() => {
            setToggleLoginSignUp(true);
          }}
        >
          Sign up now
        </span>
      </div>

      <div className="info">
        <span>
          user: <span style={{ color: "red" }}>admin</span>
        </span>
        <span style={{ marginLeft: "10px" }}>
          pass: <span style={{ color: "red" }}> admin@123</span>
        </span>
      </div>
    </div>
  );
};

export default LogIn;
