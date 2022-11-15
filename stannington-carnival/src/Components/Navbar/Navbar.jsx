import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../../img/logo.jpg";
import "./Navbar.css";

const NavbarMenu = () => {
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
            <Button variant="custom">
              <a className="button" href="/login">
                Login
              </a>
            </Button>
            <Button>
              <a className="button" href="/register">
                Register
              </a>
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
