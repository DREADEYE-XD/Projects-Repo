import React, { useState } from "react";
import Logo from "../home/nav/logo/logo";
import LogIn from "./logIn";
import "./loginPage.css";
import SignUp from "./signUp";
import { Link } from "react-router-dom";
import Home from "../home/home";
const LoginPage = () => {
  const [toggleLoginSignUp, setToggleLoginSignUp] = useState(false);
  const [authentication, setAuthentication] = useState({
    loginStat: false,
    pswdStat: false,
  });

  return (
    <>
      <nav>
        <Logo />
      </nav>

      <body id="login-page-body">
        <div className="background-img">
          <img id="lg-bg-img" src="./images/netflixBG.png" alt="" />
        </div>
        <div className="loginFormOuter">
          <div className="loginFormInner">
            {toggleLoginSignUp ? (
              <SignUp
                setToggleLoginSignUp={setToggleLoginSignUp}
                setAuthentication={setAuthentication}
              />
            ) : (
              <LogIn setToggleLoginSignUp={setToggleLoginSignUp} />
            )}
          </div>
        </div>
      </body>

      {authentication.loginStat && authentication.pswdStat ? (
        <Link to={<Home />} />
      ) : null}
    </>
  );
};

export default LoginPage;
