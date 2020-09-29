import React from "react";
import "./footer.css";
import githubIcon from "./github.png";
import linkedinIcon from "./Linkedin.PNG";

function Footer() {
    return (
        <footer className="row pt-2 pb-4 foot justify-content-center">
            <div className="mr-3 name">Hema</div>
            <a href="https://github.com/hema0618">
                <img className="linkicon mr-3" title="Github Profile" src={githubIcon}/>
            </a>
            <a href="https://www.linkedin.com/in/komatineni-hemalatha-628b2995/">
                <img className="linkicon" title="Linkedin Profile" src={linkedinIcon}/>
            </a>
        </footer>
    );
  }

export default Footer;