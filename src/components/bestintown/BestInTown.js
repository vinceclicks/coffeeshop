import React from "react";
import "../../assets/index.scss";
import "../../assets/typography.scss";
import "./BestInTown.scss";
import { ReactComponent as CardBeans } from "../../assets/cardbeans.svg";
import { ReactComponent as Decaf } from "../../assets/decaf.svg";
import { ReactComponent as Tea } from "../../assets/tea.svg";
import { ReactComponent as Cap } from "../../assets/cap.svg";

const BestInTown = () => {
    return (
        <section className="bestintown">
            <div className="bestintown__box">
                <div className="bestintown__textbox">
                    <h2 className="heading-2">The Best In Town</h2>
                    <p className="paragraph">Serving the best coffee in town. Every one likes coffee.</p>
                </div>
                <div className="bestintown__cards">
                    <div className="bestintown__card">
                        <div className="bestintown__circle">
                            <CardBeans className="bestintown__img bestintown__cardbeans" />
                        </div>
                        <h3 className="heading-3">Black Coffee</h3>
                    </div>
                    <div className="bestintown__card">
                        <div className="bestintown__circle">
                            <Decaf className="bestintown__img bestintown__decaf" />
                        </div>
                        <h3 className="heading-3">Decaf</h3>
                    </div>
                    <div className="bestintown__card">
                        <div className="bestintown__circle">
                            <Tea className="bestintown__img bestintown__tea" />
                        </div>
                        <h3 className="heading-3">Tea</h3>
                    </div>
                    <div className="bestintown__card">
                        <div className="bestintown__circle">
                            <Cap className="bestintown__img bestintown__cap" />
                        </div>
                        <h3 className="heading-3">Cappuccino</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestInTown;
