import React, { useState, useEffect } from "react";
import "../../assets/index.scss";
import "../../assets/typography.scss";
import "./ShopPage.scss";
import ProductCard from "../productcard/ProductCard.js";
import ProductData from "../productcard/ProductData.js";
import FiltSort from "./filtsort/FiltSort";

const ShopPage = () => {
    const originalData = ProductData;
    const [data, setData] = useState(originalData);
    const [activeFilt, setActiveFilt] = useState("Shop All");
    const [dropdownPick, setDropdownPick] = useState({ value: "default" });

    const filterHandler = (filteredBy) => {
        setActiveFilt(filteredBy);
    };

    const sortHandler = (sortBy) => {
        setDropdownPick(sortBy);
    };

    useEffect(() => {
        const filtered = originalData.filter((element) => {
            if (activeFilt.toLowerCase() === element.type) {
                return element.type;
            } else if (activeFilt === "Shop All") {
                return originalData;
            }
        });
        setData(filtered);
        setDropdownPick({ value: "default" });
    }, [activeFilt]);

    // useEffect(() => {
    //     const newarr = data.slice();
    //     const sortedData = newarr.sort((a, b) => b.price - a.price);
    //     setData(sortedData);
    // }, [dropdownPick]);
    //TOO TIRED TO DO ALL THIS RIGHT TODAY

    return (
        <div className="shop">
            <div className="shop__shopbox">
                <h2 className="heading-2 shop__shophead">Shop</h2>
                <FiltSort
                    active={activeFilt}
                    onChangeFilter={filterHandler}
                    dropdownVal={dropdownPick}
                    onChangeSort={sortHandler}
                />
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
