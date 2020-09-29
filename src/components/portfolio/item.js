import React from "react";

function Portfolio(props) {
    return (
    <div className="col-lg-5 mb-3">
        <div className="row justify-content-center">
            <div className="cont">
                <a className="portitem" href={props.link}>
                    <img src={props.image} title={props.name} className="portfolioimg"/>
                    <div className="overlay">
                        <h5 className="titleproject">{props.name}</h5>
                        <div className="titleabout">{props.about}</div>
                    </div>
                </a>
            </div>
        </div>
        <div className="row justify-content-center mb-3">
            <a className="col-lg-5 linkbtn text-center mx-1 my-1 py-1" href={props.github}>Github Repository</a>
            <a className="col-lg-5 linkbtn text-center mx-1 my-1 py-1" href={props.link}>Visit Web Page</a>
        </div>
    </div>
    );
}

export default Portfolio;