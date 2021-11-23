import React from "react";
import "./OurLocations.scss";
import { ReactComponent as RightArrow } from "../../assets/r-arr.svg";
import BaristaBar from "../../assets/baristabar.png";

const OurLocations = () => {
    return (
        <section className="ourlocations">
            <div className="ourlocations__box">
                <div className="ourlocations__textbox">
                    <h2 className="heading-2">Our Locations</h2>
                    <p className="paragraph">
                        You can find us in GC Midtown East and GC Murray Hill. Every store has their own unique
                        ambience, let's click all locations below to know which one is gonna be your favorite!
                    </p>
                    <a href="#" className="btn-primary">
                        All Locations &nbsp; <RightArrow className="btn-symbol btn-symbol-arr" />
                    </a>
                </div>
                <div className="ourlocations__imgbox">
                    <img src={BaristaBar} alt="Barista Bar" className="ourlocations__img" />
                </div>
            </div>
        </section>
    );
};

export default OurLocations;
