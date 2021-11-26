import React from "react";
import Header from "./homepage/header/Header";
import BestInTown from "./homepage/bestintown/BestInTown";
import OurStory from "./homepage/ourstory/OurStory";
import RecentProducts from "./homepage/recentproducts/RecentProducts";
import Secret from "./homepage/secret/Secret";
import OurLocations from "./homepage/ourlocations/OurLocations";
import CallToAction from "./homepage/calltoaction/CallToAction";

const HomePage = () => {
    return (
        <div>
            <Header />
            <BestInTown />
            <OurStory />
            <RecentProducts />
            <Secret />
            <OurLocations />
            <CallToAction />
        </div>
    );
};

export default HomePage;
