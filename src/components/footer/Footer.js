import React from "react";
import "./Footer.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import FooterInfo from "./FooterInfo";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__contentbox">
                <FooterInfo />
                <div className="footer__businessbox">
                    <Logo />
                    <p className="paragraph footer__paragraph">
                        Bringing people together is at the heart of who we are, and in the spirit of New York City, our
                        shops embrace all who enter its doors.
                    </p>
                </div>
                <div className="footer__copyrightbox">
                    <div className="footer__copyright paragraph--v2">Coyright &#169; 2021. All Rights Reserved.</div>
                    <div className="footer__termsbox">
                        <div className="footer__privacy paragraph--v2">Privacy Policy</div>
                        <div className="footer__terms paragraph--v2">Terms and Conditions</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
