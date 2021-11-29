import React, { useState } from "react";
import "../../assets/index.scss";
import "../../assets/typography.scss";
import "./ShopPage.scss";
import ProductCard from "../productcard/ProductCard.js";
import ProductData from "../productcard/ProductData.js";

const ShopPage = () => {
    const originalData = ProductData;
    const [data, setData] = useState(originalData);

    return (
        <div className="shop">
            <div className="shop__shopbox">
                <h2 className="heading-2 shop__shophead">Shop</h2>
                <div className="shop__sorter heading-3">Coming Soon!</div>
                <div className="shop__products">
                    {data.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.img}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
