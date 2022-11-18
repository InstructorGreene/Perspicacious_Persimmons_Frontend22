import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../../img/logo.jpg";
import "./Navbar.css";

const NavbarMenu = (props) => {
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
            <Button variant="custom">
              <a className="button" href="/register">
                Register
              </a>
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
