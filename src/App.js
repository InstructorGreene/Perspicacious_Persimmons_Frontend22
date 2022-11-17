import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApiClient } from "./ApiClient";
import HomePage from "./Components/Homepage/HomePage";
import NavbarMenu from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import "./App.css";
import Register from "./Components/Register/Register";
import StallBookingForm from "./Components/StallBookingForm/StallBookingForm";

function App() {
  const [token, changeToken] = useState(window.localStorage.getItem("token"));
  const client = new ApiClient(
    () => token,
    () => logout()
  );

  const logout = () => {
    window.localStorage.removeItem("token");
    changeToken(undefined);
  };

  const login = (authToken) => {
    window.localStorage.setItem("token", authToken);
    changeToken(authToken);
  };
  return (
    <>
      <NavbarMenu />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <Login loggedIn={(token) => login(token)} client={client} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<StallBookingForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
