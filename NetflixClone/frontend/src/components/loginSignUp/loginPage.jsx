import React, { useState } from "react";
import Logo from "../home/nav/logo/logo";
import LogIn from "./logIn";
import "./loginPage.css";
import SignUp from "./signUp";

const LoginPage = () => {
  const [toggleLoginSignUp, setToggleLoginSignUp] = useState(false);


  return (
    <>
      <nav>
        <Logo />
      </nav>

      <div id="login-page-body">
        <div className="background-img">
          <img id="lg-bg-img" src="./images/netflixBG.png" alt="" />
        </div>
        <div className="loginFormOuter">
          <div className="loginFormInner">
            {toggleLoginSignUp ? (
              <SignUp setToggleLoginSignUp={setToggleLoginSignUp} />
            ) : (
              <LogIn
                setToggleLoginSignUp={setToggleLoginSignUp}
                
              />
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default LoginPage;
