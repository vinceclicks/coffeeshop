import React from "react";
import "../../../assets/index.scss";
import "../../../assets/typography.scss";
import "./FiltSort.scss";
import SortDropDown from "../sortdropdown/SortDropDown";

const FiltSort = (props) => {
    const filterSelector = (event) => {
        props.onChangeFilter(event.target.textContent);
    };

    const sortHandler = (sortBy) => {
        props.onChangeSort(sortBy);
    };

    return (
        <div className="filtsort">
            <div className="filtsort__filterbox">
                <button onClick={filterSelector} className="filtsort__filteritem">
                    <h4 className={`heading-4 ${props.active === "Shop All" && "filtsort__active"}`}>Shop All</h4>
                </button>
                <button onClick={filterSelector} className="filtsort__filteritem">
                    <h4 className={`heading-4 ${props.active === "Decaf" && "filtsort__active"}`}>Decaf</h4>
                </button>
                <button onClick={filterSelector} className="filtsort__filteritem">
                    <h4 className={`heading-4 ${props.active === "Blend" && "filtsort__active"}`}>Blend</h4>
                </button>
                <button onClick={filterSelector} className="filtsort__filteritem">
                    <h4 className={`heading-4 ${props.active === "Light" && "filtsort__active"}`}>Light</h4>
                </button>
                <button onClick={filterSelector} className="filtsort__filteritem">
                    <h4 className={`heading-4 ${props.active === "Espresso" && "filtsort__active"}`}>Espresso</h4>
                </button>
            </div>
            <SortDropDown dropdownVal={props.dropdownVal} onChangeSort={sortHandler} />
        </div>
    );
};

export default FiltSort;
