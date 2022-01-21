import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
             
            <div className="container">
            
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                    
                        <li><a className="btn btn-danger" href="#search" >SEARCH</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;