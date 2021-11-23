import "./assets/App.scss";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import BestInTown from "./components/bestintown/BestInTown";
import OurStory from "./components/ourstory/OurStory";
import RecentProducts from "./components/recentproducts/RecentProducts";
import Secret from "./components/secret/Secret";
import OurLocations from "./components/ourlocations/OurLocations";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <BestInTown />
            <OurStory />
            <RecentProducts />
            <Secret />
            <OurLocations />
        </div>
    );
}

export default App;
