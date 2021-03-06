import React from "react";
import "./ProductCard.scss";
import { ReactComponent as RightArrow } from "../../assets/r-arr.svg";

const ProductCard = (props) => {
    return (
        <div className="productcard">
            <div className="productcard__infocontainer">
                <img src={props.image} alt="coffee" className={`productcard__img productcard__img${props.id}`} />
                <div className="productcard__textbox">
                    <h3 className="heading-3">{props.name}</h3>
                    <p className="paragraph">Serving the best coffee in town. Every one likes coffee.</p>
                </div>
                <div className="productcard__finalbox">
                    <h3 className="heading-3">${props.price}</h3>
                    <a href="#" className="btn-tertiary">
                        Add To Cart &nbsp; <RightArrow className="btn-symbol btn-symbol-arrgold" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
