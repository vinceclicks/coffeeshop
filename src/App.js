import "./assets/App.scss";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import BestInTown from "./components/bestintown/BestInTown";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <BestInTown />
        </div>
    );
}

export default App;
