import React from "react";
import "./CallToAction.scss";
import { ReactComponent as RightArrow } from "../../assets/r-arr.svg";

const CallToAction = () => {
    return (
        <div className="cta">
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
        </div>
    );
};

export default CallToAction;
