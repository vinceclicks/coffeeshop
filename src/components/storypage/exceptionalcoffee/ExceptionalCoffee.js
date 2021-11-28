import React from "react";
import "../../../assets/index.scss";
import "../../../assets/typography.scss";
import "./ExceptionalCoffee.scss";
import { ReactComponent as FreshGround } from "../../../assets/freshground.svg";
import { ReactComponent as DeepRoast } from "../../../assets/deeproast.svg";
import { ReactComponent as SmoothFresh } from "../../../assets/smoothfresh.svg";
import { ReactComponent as PureIngredients } from "../../../assets/pureingredients.svg";

const ExceptionalCoffee = () => {
    return (
        <section className="exceptionalcoffee">
            <div className="exceptionalcoffee__content">
                <div className="exceptionalcoffee__box">
                    <FreshGround className="exceptionalcoffee__badge" />
                    <h3 className="heading-3 exceptionalcoffee__head">Freshly Grounded Beans</h3>
                    <p className="paragraph exceptionalcoffee__paragraph">
                        An exceptional coffee experience starts with only the best ingredients. Serving the best coffee
                        in town.
                    </p>
                </div>
                <div className="exceptionalcoffee__box">
                    <DeepRoast className="exceptionalcoffee__badge" />
                    <h3 className="heading-3 exceptionalcoffee__head">Deeply Roasted</h3>
                    <p className="paragraph exceptionalcoffee__paragraph">
                        An exceptional coffee experience starts with only the best ingredients. Serving the best coffee
                        in town.
                    </p>
                </div>
                <div className="exceptionalcoffee__box">
                    <SmoothFresh className="exceptionalcoffee__badge" />
                    <h3 className="heading-3 exceptionalcoffee__head">Smooth &amp; Fresh</h3>
                    <p className="paragraph exceptionalcoffee__paragraph">
                        An exceptional coffee experience starts with only the best ingredients. Serving the best coffee
                        in town.
                    </p>
                </div>
                <div className="exceptionalcoffee__box">
                    <PureIngredients className="exceptionalcoffee__badge" />
                    <h3 className="heading-3 exceptionalcoffee__head">Pure Ingredients</h3>
                    <p className="paragraph exceptionalcoffee__paragraph">
                        An exceptional coffee experience starts with only the best ingredients. Serving the best coffee
                        in town.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalCoffee;
