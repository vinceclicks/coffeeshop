import React, { Component } from "react";
import "./Navbar.scss";
import { ReactComponent as Search } from "../../assets/search-icon.svg";
import { ReactComponent as Cart } from "../../assets/cart-icon.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
        console.log(this.state.isNavOpen);
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar__nav-box">
                    <div className="navbar__nav">
                        <input onClick={this.toggleNav} type="checkbox" id="nav-toggle" className="navbar__checkbox" />
                        <label htmlFor="nav-toggle" className="navbar__button">
                            <span class="navbar__icon">&nbsp;</span>
                        </label>
                    </div>
                </div>
                <div className="navbar__logo-box">
                    <Logo className="navbar__logo" />
                </div>
                <div className="navbar__tools">
                    <a href="#" className="navbar__search">
                        <Search className="navbar__search-icon" />
                    </a>
                    <div className="navbar__cart-box">
                        <a href="#">
                            <Cart className="navbar__cart" />
                            <div className="navbar__cart-badge" />
                        </a>
                    </div>
                </div>
                <nav className={`navigation ${this.state.isNavOpen ? "navigation__navopen" : ""}`}>
                    <ul className="navigation__list">
                        <li className="navigation__item ">
                            <a href="#" className="navigation__link active">
                                Home
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                Story
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                Shop
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                Locations
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className="navigation__list-social">
                        <li className="navigation__item-social">
                            <a href="#" className="navigation__link-social">
                                Facebook
                            </a>
                        </li>
                        <li className="navigation__item-social">
                            <a href="#" className="navigation__link-social">
                                Twitter
                            </a>
                        </li>
                        <li className="navigation__item-social">
                            <a href="#" className="navigation__link-social">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
