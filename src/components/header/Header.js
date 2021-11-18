import React from "react";
import "./Header.scss";
import HeroGroup from "../../assets/herogroup.png";

function Header() {
    return (
        <header className="header">
            <div className="header__text-box">
                <p className="pargraph">thingymajig</p>
            </div>
            <div className="header__hero-box">
                <img src={HeroGroup} alt="Hero Image" className="heroimg" />
            </div>
        </header>
    );
}

export default Header;
