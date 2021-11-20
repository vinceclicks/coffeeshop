import React from "react";
import "./Header.scss";
import "../../assets/typography.scss";
import "../../assets/index.scss";
import HeroGroup from "../../assets/herogroup.png";
import { ReactComponent as RightArrow } from "../../assets/r-arr.svg";
import { ReactComponent as PlaySym } from "../../assets/playsym.svg";

function Header() {
    return (
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-1">Coffee Should Be Something Special</h1>
                <p className="header__paragraph heading-sub">
                    We believe a cup of coffee is one of the most important simple pleasures in life.
                </p>
                <div className="header__btn-group">
                    <a href="#" className="btn-primary">
                        Shop Coffee <RightArrow className="btn-symbol" />
                    </a>
                    <a href="#" className="btn-secondary">
                        <PlaySym className="btn-symbol btn-symbol--mr" />
                        Play Inspiration
                    </a>
                </div>
            </div>
            <div className="header__hero-box">
                <img src={HeroGroup} alt="Hero Image" className="header__heroimg" />
            </div>
        </header>
    );
}

export default Header;
