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
                        
                <p>These days I am looking to branch my professional interests in other directions. I
                will soon complete my studies with the Trilogy UT Coding Bootcamp where I have learned
                how to use web coding languages such as <strong>HTML, CSS, and Javascript along with Jquery.
                </strong> Frameworks such as <strong>Bootstrap and Bulma</strong> are also toolkits I know well. 
                I am also familiar with <strong>Node and Express,</strong> along with backend technologies such 
                as <strong>SQL and Mongo.</strong> I am trained to use <strong>Git and Github,</strong> and most 
                recently have been learning <strong>React.</strong>
                </p>

                <p>My goal in the months ahead is to persue a career in web development working as a front-end,
                back-end, or full-stack developer. Please feel free to take a look at my portfolio work and my Github
                repositories. Additionally you can contact me by reach out via email on my contact page, or through Linkedin
                with the link below.
                </p>
            </div>
        </div>
    );
}

export default About;