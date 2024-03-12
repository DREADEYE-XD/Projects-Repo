import React from "react";

const SignUp = ({setToggleLoginSignUp}) => {
  return (
    <div className="signUp-form-design">
      <span id="lg-header">Sign Up</span>
      <input
        className="inputs"
        id="sg-usname"
        type="text"
        placeholder="Username"
      />
      <input
        className="inputs"
        id="sg-pass"
        type="password"
        placeholder="Password"
      />
      <input
        className="inputs"
        id="sg-re-pass"
        type="password"
        placeholder="Re-Enter Password"
      />

      <button className="submit-btn" type="submit">
        <span>Sign Up</span>
      </button>

      <div className="sg-helper-cont">
        <span >Already a memeber? <span onClick={()=>{setToggleLoginSignUp(false)}} style={{cursor:'pointer', color: "white"}}> Login </span></span>
      </div>
    </div>
  );
};

export default SignUp;
