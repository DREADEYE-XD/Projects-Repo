import React from "react";

const LogIn = ({setToggleLoginSignUp, setAuthentication}) => {

  console.log(setAuthentication);

  return (
    <div className="login-form-design">
      <span id="lg-header">Sign In</span>
      <input
        className="inputs"
        id="lg-usname"
        type="text"
        placeholder="Username"
        onChange={(e)=>{
          if(e.target.value==='admin'){
            setAuthentication({login: true});
          }
        }}
      />
      <input
        className="inputs"
        id="lg-pass"
        type="password"
        placeholder="Password"
        onChange={(e)=>{
          if(e.target.value==='admin@123'){
            setAuthentication({pswdStat: true});
          }
        }}
      />
      <button className="submit-btn" type="submit">
        <span>Sign In</span>
      </button>

      <div className="helper-cont">
        <input type="checkbox" id="lg-checkbox" />
        <span id="rememberMe">Remember me</span>
        <span id="needHelp">Need help?</span>
      </div>

      <div className="switch-to-signUp">
        <span>New to Netflix?</span>
        <span style={{marginLeft: '5px', color: "white", cursor: 'pointer'}} onClick={()=>{setToggleLoginSignUp(true)}}>Sign up now</span>
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
