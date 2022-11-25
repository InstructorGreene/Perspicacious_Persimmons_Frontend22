import React from "react";
import "./Footer.css";
import {
  BsFacebook,
  BsTwitter,
  BsEnvelopeFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

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
            <h4>Follow us</h4>
            <ul className="list-unstyled">
              <a className="social" href="https://twitter.com/stanncarnival">
                <BsTwitter size="3em" />
              </a>
              <a
                className="social"
                href="https://www.facebook.com/stanningtoncarnival"
              >
                <BsFacebook size="3em" />
              </a>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact us</h4>
            <a className="contacts" href="mailto:stanningtoncarnival@gmail.com">
              <BsEnvelopeFill className="social" size="1.5em" />
              <span className="email">stanningtoncarnival@gmail.com</span>
            </a>
            <a className="contacts" href="tel:07547224057">
              <BsFillTelephoneFill className="social" size="1.5em" />
              <span className="contact"> 07547 224057</span>
            </a>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Stanington Carnival | All rights
            reserved |
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
