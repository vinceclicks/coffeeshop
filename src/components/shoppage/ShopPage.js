import React from "react";
import "../../assets/index.scss";
import "../../assets/typography.scss";
import "./ShopPage.scss";
import ProductCard from "../productcard/ProductCard.js";

const ShopPage = () => {
    return (
        <div className="shop">
            <h2 className="heading-2">Shop</h2>
            <div className="shop__sorter"></div>
            <div className="shop__products">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default ShopPage;
