import React from "react";
import "../../../assets/index.scss";
import "../../../assets/typography.scss";
import "./OurPromise.scss";
import DarkShop from "../../../assets/darkshop.png";
import BeanTenStory from "../../../assets/bean10.png";

const OurPromise = () => {
    return (
        <section className="ourpromise">
            <div className="ourpromise__content">
                <div className="ourpromise__textbox">
                    <h3 className="ourpromise__texthead heading-3">Our Promise</h3>
                    <div className="goldline"></div>
                    <p className="paragraph">
                        We help build coffee programs to grow. Cream, at, acerbic redeye iced americano coffee white. To
                        go et, steamed a cafe au lait crema extra.
                    </p>
                    <img src={BeanTenStory} alt="bean" className="ourpromise__bean" />
                </div>
                <div className="ourpromise__imgbox">
                    <img src={DarkShop} alt="Coffee Shop" className="storyhead__img" />
                </div>
            </div>
        </section>
    );
};

export default OurPromise;
