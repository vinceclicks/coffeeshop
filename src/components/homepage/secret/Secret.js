import React from "react";
import "./Secret.scss";
import FilterPour from "../../../assets/filterpour.png";
import BeanSeven from "../../../assets/bean7.png";

const Secret = () => {
    return (
        <section className="secret">
            <img src={BeanSeven} alt="Beans" className="bean bean__7" />
            <img src={BeanSeven} alt="Beans" className="bean bean__8" />
            <div className="secret__box">
                <div className="secret__head">
                    <h2 className="heading-2 secret__text">Secret Of Our Coffee</h2>
                    <p className="paragraph secret__text">Serving the best coffee in town. Every one likes coffee.</p>
                </div>
                <div className="secret__center">
                    <div className="secret__purebox">
                        <h3 className="heading-3 secret__text secret__margin">Pure Ingredients</h3>
                        <p className="paragraph secret__text">
                            Bringing people together is at the heart of who we are, and in the spirit of New York City,
                            our shops embrace all who enter its doors.
                        </p>
                    </div>
                    <img src={FilterPour} alt="Coffee filter pour" className="secret__img" />
                    <div className="secret__tastebox">
                        <h3 className="heading-3 secret__text secret__margin">Taste By Color</h3>
                        <p className="paragraph secret__text">
                            Bringing people together is at the heart of who we are, and in the spirit of New York City,
                            our shops embrace all who enter its doors.
                        </p>
                    </div>
                </div>
                <div className="secret__environmentbox">
                    <h3 className="heading-3 secret__text secret__margin">Environmentalism</h3>
                    <p className="paragraph secret__text">
                        Bringing people together is at the heart of who we are, and in the spirit of New York City, our
                        shops embrace all who enter its doors.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Secret;
