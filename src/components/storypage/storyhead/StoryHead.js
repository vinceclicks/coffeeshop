import React from "react";
import "../../../assets/index.scss";
import "../../../assets/typography.scss";
import "./StoryHead.scss";
import StoryHeadShop from "../../../assets/storyheadshop.png";
import BeanFourStory from "../../../assets/bean4.png";
import BeanLeafTwo from "../../../assets/beanleaf2.png";

const StoryHead = () => {
    return (
        <section className="storyhead">
            <img src={BeanLeafTwo} alt="bean" className="storyhead__beans" />
            <div className="storyhead__content">
                <div className="storyhead__textbox">
                    <img src={BeanFourStory} alt="bean" className="storyhead__bean4-2" />
                    <h2 className="heading-2">Small Cafe In The Heart Of Town</h2>
                    <div className="goldline"></div>
                    <p className="paragraph">
                        We strive to form profound partnerships with farmers from all over the world to create
                        perspective together and form healthy working relationships built on trust and respect.
                        Everything we do is a matter of heart, body and soul.
                    </p>
                </div>
                <div className="storyhead__imgbox">
                    <img src={BeanFourStory} alt="bean" className="storyhead__bean4" />
                    <img src={StoryHeadShop} alt="Coffee Shop" className="storyhead__img" />
                </div>
            </div>
        </section>
    );
};

export default StoryHead;
