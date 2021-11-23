import React from "react";
import "./RecentProducts.scss";
import { ReactComponent as RightArrow } from "../../assets/r-arr.svg";
import ProductCard from "../productcard/ProductCard";
import { ReactComponent as CoffeeBlue } from "../../assets/coffeeblue.svg";
import { ReactComponent as CoffeePurple } from "../../assets/coffeepurple.svg";
import { ReactComponent as CoffeeOrange } from "../../assets/coffeeorange.svg";

const RecentProducts = () => {
    return (
        <section className="recentproducts">
            <div className="recentproducts__box">
                <div className="recentproducts__head">
                    <div className="recentproducts__textbox">
                        <h2 className="heading-2">Recent Products</h2>
                        <p className="paragraph">Serving the best coffee in town. Every one likes coffee.</p>
                    </div>
                    <div className="recentproducts__button">
                        <a href="#" className="btn-primary">
                            View All Products &nbsp; <RightArrow className="btn-symbol btn-symbol-arr" />
                        </a>
                    </div>
                </div>
                <div className="recentproducts__productsbox">
                    <ProductCard name="Green Americana" image={<CoffeeBlue className="productcard__img" />} />
                    <ProductCard name="Ethiopian Aroma" image={<CoffeePurple className="productcard__img" />} />
                    <ProductCard name="Double Espresso" image={<CoffeeOrange className="productcard__img" />} />
                </div>
            </div>
        </section>
    );
};

export default RecentProducts;
