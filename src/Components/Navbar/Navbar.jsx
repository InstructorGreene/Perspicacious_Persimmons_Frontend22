import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavbarMenu = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.logout();
    navigate("/");
  };
  return (
    <header>
      <Navbar>
        <Container className="nav-container">
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="Stannington-carnival" />
          </Navbar.Brand>
          <Navbar.Text className="nav-text">
            <h1>Stannington Carnival</h1>
          </Navbar.Text>

          {window.localStorage.getItem("token") ? (
            <div className="btn-space">
              <Link to="/dashboard" className="btn btn-custom btn-change">
                Bookings
              </Link>
              <Link
                to="/booking"
                className="btn btn-custom btn-change"
                style={{
                  display:
                    props.role === "StallHolder" || props.role === "admin"
                      ? "inline"
                      : "none",
                }}
              >
                Add Booking
              </Link>
              <Button
                variant="custom"
                className="btn-change"
                onClick={() => handleLogout()}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="btn-space">
              <Link to="/login" className="btn btn-custom btn-change">
                Login
              </Link>
              <Link to="/register" className="btn btn-custom btn-change">
                Register
              </Link>
            </div>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarMenu;
