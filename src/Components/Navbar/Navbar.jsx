import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../../img/logo.jpg";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavbarMenu = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar>
        <Container className="nav-container">
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="Stannington-carnival" />
          </Navbar.Brand>
          <Navbar.Text className="nav-text">
            <h1>Stannington Carnival</h1>
          </Navbar.Text>

          <div className="btn-space">
            <Button variant="custom" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button variant="custom" onClick={() => navigate("/register")}>
              Register
            </Button>
            <Button variant="custom" onClick={props.logout}>
              <a className="button" href="/">
                Logout
              </a>
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
