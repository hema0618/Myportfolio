import React from "react";
import { Link, useLocation } from "react-router-dom";
import  "./header.css"

function Header() {
    const location = useLocation();
    return (
        <header className="row pt-5 pb-0 topbar text-center">
        <div className="col-lg-5 col-md-12 pb-2 offset-lg-1">
            <a className="col-lg-1 col-md-12 titlename text-center">Hemalatha</a>
            <a className="list-inline-item titlejob">| Full Stack Web Developer |</a>
        </div>
        <div className="col-lg-4 col-md-12 text-center pt-3 pb-1">
        <Link to="/" className={location.pathname === "/" || "/portfolio" ? "pagelink mr-3" : "pagelink"}>
          PORTFOLIO
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "pagelink mr-3" : "pagelink mr-3"}>
          ABOUT
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "pagelink" : "pagelink"}>
          CONTACT
        </Link> 
        </div>
    </header>
    );
  }
  
  export default Header;