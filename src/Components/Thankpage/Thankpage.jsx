import React from "react";
import { Link } from "react-router-dom";
import Serpentina from "../../img/serpentina_1.jpg";
import "./Thankpage.css";

const Thankpage = (props) => { 
  
      return (
        <div>
          
          <h2 className="header-thank">Thank You For Your Registration!</h2>
              <h3 className="notific-thank">Account created, you may book the place for stall!</h3>  
              <img className="serpentina" src={Serpentina} alt="Stannington-carnival-registration" />          
                <Link to={"/booking"} className="button-book">Book place on Carnival</Link>               
           
        </div>  
);
}

export default Thankpage;
