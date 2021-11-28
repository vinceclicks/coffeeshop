import React, { useState } from "react";
import "../../../assets/index.scss";
import "../../../assets/typography.scss";
import "./Testimonials.scss";
import { testimonialData } from "./TestimonialData";
import { ReactComponent as RightCarousel } from "../../../assets/r-carousel.svg";
import { ReactComponent as LeftCarousel } from "../../../assets/l-carousel.svg";

const Testimonials = () => {
    const [curTestimonial, setCurTestimonial] = useState(1);
    const [animate, setAnimate] = useState(true);
    const [animateRight, setAnimateRight] = useState(false);
    const [animateLeft, setAnimateLeft] = useState(false);

    const reAnimate = () => {
        setAnimate(true);
    };

    const reAnimateLeft = () => {
        setAnimateLeft(false);
    };

    const reAnimateRight = () => {
        setAnimateRight(false);
    };

    const animateRepeater = () => {
        setAnimate(false);
        setTimeout(reAnimate, 1);
    };

    const animateRepeaterLeft = () => {
        setAnimateLeft(true);
        setTimeout(reAnimateLeft, 1000);
    };

    const animateRepeaterRight = () => {
        setAnimateRight(true);
        setTimeout(reAnimateRight, 1000);
    };

    const leftClickHandler = () => {
        const testChangeLeft = () => {
            setCurTestimonial(() => {
                if (curTestimonial - 1 < 0) {
                    return testimonialData.length - 1;
                } else {
                    return curTestimonial - 1;
                }
            });
        };
        animateRepeaterLeft();
        animateRepeater();
        setTimeout(testChangeLeft, 250);
    };

    const rightClickHandler = () => {
        const testChangeRight = () => {
            setCurTestimonial(() => {
                if (curTestimonial + 1 >= testimonialData.length) {
                    return 0;
                } else {
                    return curTestimonial + 1;
                }
            });
        };
        animateRepeaterRight();
        animateRepeater();
        setTimeout(testChangeRight, 250);
    };

    return (
        <section className="testimonials">
            <div className="testimonials__carousel">
                <div className="testimonials__box">
                    <div className="testimonials__textbox">
                        <h2 className="heading-2 testimonials__text">Testimonials</h2>
                        <p
                            className={`testimonials__quote ${animateRight ? "animateRight" : ""} ${
                                animateLeft ? "animateLeft" : ""
                            }`}
                        >
                            {testimonialData[curTestimonial].quote}
                            <span className="testimonials__quote--rquo">&rdquo;</span>
                        </p>
                        <div
                            className={`testimonials__namebox ${animateRight ? "animateRight" : ""} ${
                                animateLeft ? "animateLeft" : ""
                            }`}
                        >
                            <p className="testimonials__name">{testimonialData[curTestimonial].name}</p>
                            <p className="testimonials__paragraph paragraph">Coffee Lover</p>
                        </div>
                    </div>
                    <div className="testimonials__buttonbox">
                        <button className="non-btn" onClick={leftClickHandler}>
                            <LeftCarousel />
                        </button>
                        <button className="non-btn" onClick={rightClickHandler}>
                            <RightCarousel />
                        </button>
                    </div>
                </div>
                <div className="testimonials__imgbox">
                    <img
                        src={testimonialData[curTestimonial].img}
                        alt=""
                        className={`testimonials__img ${animate ? "testimonials__img--animate" : ""} `}
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
