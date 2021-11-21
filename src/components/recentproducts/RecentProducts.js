import React from "react";
import "./RecentProducts.scss";
import { ReactComponent as RightArrow } from "../../assets/r-arr.svg";
import ProductCard from "../productcard/ProductCard";

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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    );
};

export default RecentProducts;
