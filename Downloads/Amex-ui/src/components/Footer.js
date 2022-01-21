import React from 'react';
import logo from "./data/logo.jpg"



const Footer = () => {
    return (
        <footer className="container-fluid text-center ">
            <div className="row">
            <div className="col-sm-4">
                   <div className="shoe-container">
                      <img src={logo} height={80} width={80} alt=""/>
                    </div>
                    <p>Amex.</p>
                </div>
                <div className="col-sm-4">
                    <h4>Get in Touch</h4>
                    <p><span className="glyphicon glyphicon-map-marker"></span>Amex</p>
                    <p><span className="glyphicon glyphicon-envelope"></span> ravi@amex.com</p>
                    
                </div>
                <div className="col-sm-4">
                    <h4>About Amex</h4>
                    <p><span className="glyphicon "></span>  About Us</p>
                    <a href=""><p><span className="glyphicon"></span> Instagram </p></a>
                    <a href=""><p><span className="glyphicon "></span>Twitter</p></a>
                    <a href=""><p><span className="glyphicon "></span>Linkedin</p></a>
                </div>
                
           
          </div>
          <a href="#myPage" title="To Top">
                <span className="glyphicon glyphicon-chevron-up"></span>
            </a>
        </footer>
    )
}

export default Footer;