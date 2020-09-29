import React from "react";
import profile from "./profile.jpg"

function About() {
    return (
        <div>
            <div className="row px-4 topic">
                <h3 className="pt-4 pb-3 ml-lg-5">ABOUT ME</h3>
            </div>    
        
            <div className="py-3 px-2">
                <img className="float-left col-md-3 mr-4 mb-3" src={profile}/>
                
                <p>I have been fascinated with computers since the days of surfing the web
                on dial-up on my parent's Windows '95 computer. I eventually found my way
                to studying interactive design and game development at Savannah College of
                Art and Design which I graduated in 2013.
                </p>
                        
               

                
            </div>
        </div>
    );
}

export default About;