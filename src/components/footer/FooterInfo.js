import React from "react";
import "./FooterInfo.scss";
import { Link } from "react-router-dom";

const FooterInfo = () => {
    return (
        <div className="footerinfo">
            <div className="footerinfo__hours">
                <div className="footerinfo__boxhead">Opening hours</div>
                <div className="footerinfo__hoursbox">
                    <p className="footerinfo__productitem paragraph--v2">Sat - Mon</p>
                    <div className="footerinfo__productitem">
                        <p className="footerinfo__time">10.00</p>
                        <span className="paragraph--v2">&nbsp;&nbsp;to&nbsp;</span>
                        <p className="footerinfo__time">22.00</p>
                    </div>
                    <p className="footerinfo__productitem paragraph--v2">Tue - Thu</p>
                    <div className="footerinfo__productitem">
                        <p className="footerinfo__time">09.00</p>
                        <span className="paragraph--v2">&nbsp;&nbsp;to&nbsp;</span>
                        <p className="footerinfo__time">21.00</p>
                    </div>
                    <p className="footerinfo__productitem paragraph--v2">Friday</p>
                    <p className="footerinfo__productitem footerinfo__time">Holiday</p>
                </div>
            </div>
            <div className="footerinfo__company">
                <div className="footerinfo__boxhead">The company</div>
                <div className="footerinfo__companybox">
                    <Link to="/coffeeshop/" className="footerinfo__companyitem paragraph--v2">
                        Home
                    </Link>
                    <Link to="/coffeeshop/story" className="footerinfo__companyitem paragraph--v2">
                        Story
                    </Link>
                    <Link to="/coffeeshop/shop" className="footerinfo__companyitem paragraph--v2">
                        Shop
                    </Link>
                    <p className="footerinfo__companyitem paragraph--v2">Sustainability</p>
                </div>
            </div>
            <div className="footerinfo__products">
                <div className="footerinfo__boxhead">Products</div>
                <div className="footerinfo__productbox">
                    <p className="footerinfo__productitem paragraph--v2">Coffee Beans</p>
                    <p className="footerinfo__productitem paragraph--v2">Coffee Mug</p>
                    <p className="footerinfo__productitem paragraph--v2">Coffee Package</p>
                    <p className="footerinfo__productitem paragraph--v2">Paper Cup</p>
                </div>
            </div>
            <div className="footerinfo__locations">
                <div className="footerinfo__boxhead">Locations</div>
                <div className="footerinfo__locationbox">
                    <p className="footerinfo__productitem paragraph--v2">Proof Lab</p>
                    <p className="footerinfo__productitem paragraph--v2">Burlingame</p>
                    <p className="footerinfo__productitem paragraph--v2">Sausalito</p>
                    <p className="footerinfo__productitem paragraph--v2">Downtown Mill</p>
                    <p className="footerinfo__productitem paragraph--v2">Larkspur</p>
                    <p className="footerinfo__productitem paragraph--v2">Fort Mason</p>
                    <p className="footerinfo__productitem paragraph--v2">Lake Merritt</p>
                    <p className="footerinfo__productitem paragraph--v2">Lake Merritt</p>
                </div>
            </div>
        </div>
    );
};

export default FooterInfo;
