import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import NavbarMenu from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";
import Register from "./Components/Register/Register";
import StallBookingForm from "./Components/StallBookingForm/StallBookingForm";
import { ApiClient } from "./apiClient";
import Footer from "./Components/Footer/Footer";

const App = () => {
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
      <Router>
        <NavbarMenu client={client} logout={logout} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <Login loggedIn={(token) => login(token)} client={client} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard client={client} />} />
          <Route
            path="/booking"
            element={<StallBookingForm client={client} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
