import React from "react";
import "./contact.css";


function Contact() {

    function submitting() {
        var x = document.getElementById("snackbar");
        var name = document.getElementById("nameinput");
        var email = document.getElementById("emailinput");
        var content = document.getElementById("contentinput");
        name.value = '';
        email.value = '';
        content.value = '';
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    }

    return (
        <div>
            <div className="row px-4 mb-4 topic">
                <h3 className="pt-4 pb-3 ml-lg-5">CONTACT</h3>
            </div> 

            <div id="snackbar">Thanks for reaching out!</div>

            <div className="row my-2 offset-lg-1">
                <h5 className="ml-lg-5 pl-4 col-lg-1 col-sm-12">Name</h5>
                <input className= "col-lg-3 mx-4 border border-secondary" 
                placeholder="Jane Smith" id="nameinput" cols="100"></input>
            </div>
            <div className="row my-2 offset-lg-1">
                <h5 className="ml-lg-5 pl-4 col-lg-1 col-sm-12">Email</h5>
                <input className= "col-lg-3 mx-4 border border-secondary" 
                placeholder="Example@mail.com" id="emailinput" cols="100"></input>
            </div>

            <div className="row my-2 justify-content-center">
                <textarea className="border col-lg-8 mx-4 border-secondary pt-1" 
                placeholder="Messages will be sent to khemalatha507@gmail.com. &#10;Addtionally you can reach out to me on Linkedin (see below)."
                id="contentinput" cols="130" rows="10"></textarea>
            </div>

            <div className="row my-2 justify-content-center">
                <button className="text-center mb-4 subbtn" onClick={submitting}>Submit </button>
            </div>
        </div >   
    );
}

export default Contact;