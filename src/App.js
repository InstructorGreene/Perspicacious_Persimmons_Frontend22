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
import AddByAdmin from "./Components/StallBookingForm/AddByAdmin";

const App = () => {
  const [token, changeToken] = useState(window.localStorage.getItem("token"));
  const [role, changeRole] = useState(window.localStorage.getItem("role"));
  const [userid, changeUserId] = useState(
    window.localStorage.getItem("userid")
  );

  const client = new ApiClient(
    () => token,
    () => logout()
  );

  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("role");
    window.localStorage.removeItem("userid");
    changeRole(undefined);
    changeUserId(undefined);
    changeToken(undefined);
  };

  const login = (authToken, authRole, authId) => {
    window.localStorage.setItem("token", authToken);
    window.localStorage.setItem("role", authRole);
    window.localStorage.setItem("userid", authId);
    changeRole(authRole);
    changeUserId(authId);
    changeToken(authToken);
  };
  return (
    <>
      <Router>
        <NavbarMenu client={client} logout={logout} role={role} />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                <Login
                  loggedIn={(token, role, userid) => login(token, role, userid)}
                  client={client}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  loggedIn={(token, role, userid) => login(token, role, userid)}
                  client={client}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  client={client}
                  token={token}
                  role={role}
                  userid={userid}
                />
              }
            />

            <Route
              path="/booking"
              element={
                <StallBookingForm role={role} userid={userid} client={client} />
              }
            />
            <Route
              path="/addUser"
              element={
                <AddByAdmin
                  token={token}
                  role={role}
                  userid={userid}
                  client={client}
                />
              }
            />
          </Routes>
        </main>
      </Router>

      <Footer />
    </>
  );
};

export default App;
