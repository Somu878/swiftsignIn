import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/signin/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import ForgotPassword from "./components/forgot password/ForgotPassword";
import UpdateEmail from "./components/update Email/UpdateEmail";
function App() {
  return (
    <>
      <Routes>
        <Route default path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/updateEmail" element={<UpdateEmail />} />
      </Routes>
    </>
  );
}

export default App;
