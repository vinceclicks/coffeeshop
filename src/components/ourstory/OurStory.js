import React from "react";
import "./OurStory.scss";
import { ReactComponent as RightArrow } from "../../assets/r-arr.svg";

const OurStory = () => {
    return (
        <section className="ourstory">
            <div className="ourstory__box">
                <div className="ourstory__textbox">
                    <h4 className="heading-4">Our Story</h4>
                    <h2 className="heading-2">Roasters Community Driven Always Fresh</h2>
                    <p className="paragraph">
                        Bringing people together is at the heart of who we are, and in the spirit of New York City, our
                        shops embrace all who enter its doors.
                    </p>
                    <a href="#" className="btn-primary">
                        Full Story &nbsp; <RightArrow className="btn-symbol btn-symbol-arr" />
                    </a>
                </div>
                <div className="ourstory__imgbox">
                    <div className="ourstory__img" />
                </div>
                <h3 className="heading-3 ourstory__quote">
                    "A cup of coffee shared with a friend is happiness tasted and time well spent."
                </h3>
            </div>
        </section>
    );
};

export default OurStory;
