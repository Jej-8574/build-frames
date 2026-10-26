import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Builds from "./pages/Builds/Builds";
import About from "./pages/About/About";
import Skins from "./Skin/Skin";
import Footer from "./pages/Footer/Footer";
import Armes from "./Armes/Armes";
import Warframes from "./pages/Warframe/Warframe";
import WarframesDetails from "./pages/Warframes details/Warframesdetails";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="overlay" />
      <Navbar />

      <main className="workspace">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/warframes" element={<Warframes />} />
          <Route path="/warframes/:id" element={<WarframesDetails />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/armes" element={<Armes />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
