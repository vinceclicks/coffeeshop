import React from "react";
import "./Header.scss";
import "../../../assets/typography.scss";
import "../../../assets/index.scss";
import HeroGroup from "../../../assets/herogroup.png";
import { ReactComponent as RightArrow } from "../../../assets/r-arr.svg";
import { ReactComponent as PlaySym } from "../../../assets/playsym.svg";
import BeanOne from "../../../assets/bean1.png";
import BeanTwo from "../../../assets/bean2.png";
import BeanThree from "../../../assets/bean3.png";
import BeanLeafOne from "../../../assets/beanleaf1.png";

function Header() {
    return (
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-1">Coffee Should Be Something Special</h1>
                <img src={BeanThree} alt="bean" className="bean bean__3" />
                <p className="header__paragraph heading-sub">
                    We believe a cup of coffee is one of the most important simple pleasures in life.
                </p>
                <div className="header__btn-group">
                    <a href="#" className="btn-primary">
                        Shop Coffee &nbsp; <RightArrow className="btn-symbol btn-symbol-arr" />
                    </a>
                    <a href="#" className="btn-secondary">
                        <PlaySym className="btn-symbol btn-symbol-play" />
                        Play Inspiration
                    </a>
                </div>
            </div>
            <div className="header__hero-box">
                <img src={HeroGroup} alt="Hero Image" className="header__heroimg" />
            </div>
            <img src={BeanOne} alt="bean" className="bean bean__1" />
            <img src={BeanTwo} alt="bean" className="bean bean__2" />
            <img src={BeanLeafOne} alt="bean" className="bean beanleaf__1" />
        </header>
    );
}

export default Header;
