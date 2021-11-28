import React from "react";
import "../assets/index.scss";
import "../assets/typography.scss";
import StoryHead from "./storypage/storyhead/StoryHead";
import Welcome from "./storypage/welcome/Welcome";
import OurMission from "./storypage/ourmission/OurMission";
import OurPromise from "./storypage/ourpromise/OurPromise";
import Testimonials from "./storypage/testimonials/Testimonials";
import ExceptionalCoffee from "./storypage/exceptionalcoffee/ExceptionalCoffee";

const StoryPage = () => {
    return (
        <>
            <StoryHead />
            <Welcome />
            <OurMission />
            <OurPromise />
            <Testimonials />
            <ExceptionalCoffee />
        </>
    );
};

export default StoryPage;
