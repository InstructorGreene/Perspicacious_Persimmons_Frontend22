import React from "react";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsMailbox } from "react-icons/bs";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          {/* <div className="col">
            <h4>Stanington Carnival</h4>
            <h1 className="list-unstyled">
              <li>Stannington Park</li>
              <li>Sheffield </li>
              <li>S6 6BX Sheffield, UK</li>
            </h1>
          </div> */}
          {/* Column2 */}
          <div className="col">
            <h4>Follow Us</h4>
            <ui className="list-unstyled">
              <a href="https://twitter.com/stanncarnival">
                <BsTwitter size="3em" color="white"/></a>
                <a href="https://www.facebook.com/stanningtoncarnival">
                <BsFacebook size="3em" color="white"/></a>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact us</h4>
            <ui className="list-unstyled">
            <a href="mailto:stanningtoncarnival@gmail.com">
                <BsMailbox size="3em" color="white"/></a>
              <li>07547 224057</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Stanington Carnival | All rights reserved |
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;