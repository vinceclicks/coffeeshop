import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./components/HomePage";
import StoryPage from "./components/StoryPage";
import ShopPage from "./components/ShopPage";
import LocationsPage from "./components/LocationsPage";
import ContactPage from "./components/ContactPage";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/story" element={<StoryPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/locations" element={<LocationsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
