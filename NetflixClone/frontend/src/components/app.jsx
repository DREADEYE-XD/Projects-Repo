import React from "react";
import "./app.css";
import { Routes, Route} from "react-router-dom"
import Home from "./home/home";
import LoginPage from "./loginSignUp/loginPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>

    </Routes>
  );
};

export default App;
