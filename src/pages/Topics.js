import React from "react";
import { Link } from "react-router-dom";
import sports from "../components/img/themes_sports.svg"
import others from "../components/img/themes_others.svg"
import tobereplaced from "../components/img/themes_tobereplaced.png"
import "./topics.css";

// HOME => PERSON CHOOSE BETWEEN HOST, PUBLIC OR PRIVATE
// Acording to user choices => add host OR public OR private as route params

function Topics (props){

    const { id } = props.match.params

    return (
        <div className="container">
            <h1 className="m-4">Pick Your Topic</h1>
            <div className="d-flex justify-content-center">
                <div className="flex-column mb-2 ms-5">
                    <Link className="p-1" to={`/${id}Form`}>     
                    {/* DIRECTS TO HOST OR PUBLIC OR PRIVATE FORM  */}
                        <img src={sports} alt="sports balls" />
                    </Link>
                    <p className="p-1">Sports</p>
                </div>
                <div className="flex-column mb-2 me-5">
                    <Link className="p-1" to={`/${id}Form`}>     
                        {/* DIRECTS TO HOST OR PUBLIC OR PRIVATE FORM  */}
                        <img src={tobereplaced} alt="TO UPDATE" />
                    </Link>
                    <p className="p-1">Shows & Movies</p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="flex-column mb-2 ms-5">
                    <Link className="p-1" to={`/${id}Form`}>     
                        {/* DIRECTS TO HOST OR PUBLIC OR PRIVATE FORM  */}
                        <img src={tobereplaced} alt="TO UPDATE" />
                    </Link>
                    <p className="p-1">Trending</p>
                </div>
                <div className="flex-column mb-2 me-5">
                    <Link className="p-1" to={`/${id}Form`}>     
                        {/* DIRECTS TO HOST OR PUBLIC OR PRIVATE FORM  */}
                        <img src={others} alt="a frog" />
                    </Link>
                    <p className="p-1">Others</p>
                </div>
            </div>
        </div>
    )
}

export default Topics