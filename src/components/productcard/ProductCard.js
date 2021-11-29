import React from "react";
import "./ProductCard.scss";
import { ReactComponent as RightArrow } from "../../assets/r-arr.svg";

const ProductCard = (props) => {
    return (
        <div className="productcard">
            <img src={props.image} alt="coffee" className="productcard__img" />
            <div className="productcard__infocontainer">
                <div className="productcard__textbox">
                    <h3 className="heading-3">{props.name}</h3>
                    <p className="paragraph">Serving the best coffee in town. Every one likes coffee.</p>
                </div>
                <div className="productcard__finalbox">
                    <h3 className="heading-3">$99.99</h3>
                    <a href="#" className="btn-tertiary">
                        Add To Cart &nbsp; <RightArrow className="btn-symbol btn-symbol-arrgold" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
