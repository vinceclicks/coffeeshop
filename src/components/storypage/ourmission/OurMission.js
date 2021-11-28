import React from "react";
import "../../../assets/index.scss";
import "../../../assets/typography.scss";
import "./OurMission.scss";
import BusyShop from "../../../assets/busyshop.png";
import BeanNineStory from "../../../assets/bean9.png";

const OurMission = () => {
    return (
        <section className="ourmission">
            <div className="ourmission__content">
                <div className="ourmission__imgbox">
                    <img src={BusyShop} alt="Coffee Shop" className="storyhead__img" />
                </div>
                <div className="ourmission__textbox">
                    <h3 className="ourmission__texthead heading-3">Our Mission</h3>
                    <div className="goldline"></div>
                    <p className="paragraph">
                        We help build coffee programs to grow. Cream, at, acerbic redeye iced americano coffee white. To
                        go et, steamed a cafe au lait crema extra.
                    </p>
                    <img src={BeanNineStory} alt="bean" className="ourmission__bean" />
                </div>
            </div>
        </section>
    );
};

export default OurMission;
