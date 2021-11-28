import React from "react";
import "../../../assets/index.scss";
import "../../../assets/typography.scss";
import "./Welcome.scss";
import BeanEightStory from "../../../assets/bean8.png";

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="welcome__textbox">
                <div className="welcome__beanhead">
                    <img src={BeanEightStory} alt="bean" className="welcome__bean1" />
                    <h2 className="heading-2">Welcome To Coffee Shop</h2>
                    <img src={BeanEightStory} alt="bean" className="welcome__bean2" />
                </div>
                <p className="welcome__paragraph paragraph">
                    Bringing people together is at the heart of who we are, and in the spirit of New York City, our
                    chops embrace all who enter its doors.
                </p>
            </div>
        </section>
    );
};

export default Welcome;
