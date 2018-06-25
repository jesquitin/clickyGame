import React from "react";
import "./Footer.css";


function Footer(props) {
    return (
      <footer className="page-footer blue container">
        <div className="footer">
          <div className="row">
          <br />
            <h5 className="center white-text footer-update">{props.text}</h5>
          </div>
        </div>
        <br />
         <div className="footer-copyright">
        <br />
        <br />
          <div className="container center">
           Joseph Esquitin 2018
          </div>
        </div>
      </footer>
    )
  }




export default Footer;
