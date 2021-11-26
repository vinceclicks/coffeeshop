import React from "react";
import "./CallToAction.scss";
import { ReactComponent as RightArrow } from "../../../assets/r-arr.svg";
import BeanLeafThree from "../../../assets/beanleaf3.png";
import BeanLeafFour from "../../../assets/beanleaf2.png";

const CallToAction = () => {
    return (
        <section className="cta">
            <img src={BeanLeafThree} alt="Beans" className="bean beanleaf__3" />
            <div className="cta__contentbox">
                <div className="cta__textbox">
                    <h2 className="heading-2">Join Us And Get A 45% Discount</h2>
                    <p className="paragraph cta__paragraph">
                        Bringing people together is at the heart of who we are, and in the spirit of New York City, our
                        shops embrace all who enter its doors.
                    </p>
                </div>
                <div className="cta__subscribebox">
                    <input type="email" placeholder="Enter Your Email" className="cta__input" />
                    <button href="#" className="btn-primary--v2">
                        Subscribe &nbsp; <RightArrow className="btn-symbol btn-symbol-arr " />
                    </button>
                </div>
            </div>
            <img src={BeanLeafFour} alt="Beans" className="bean beanleaf__4" />
        </section>
    );
};

export default CallToAction;
