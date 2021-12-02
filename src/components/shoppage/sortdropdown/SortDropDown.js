import React from "react";
import "../../../assets/index.scss";
import "../../../assets/typography.scss";
import "./SortDropDown.scss";

const SortDropDown = (props) => {
    const dropdownHandler = (event) => {
        props.onChangeSort({ value: event.target.value });
    };

    return (
        <select value={props.dropdownVal.value} onChange={dropdownHandler} className="dropdown">
            <option value="default">Default Sorting</option>
            <option value="price-lowtohigh">Price: Low to High</option>
            <option value="price-hightolow">Price: High to Low</option>
        </select>
    );
};

export default SortDropDown;
