import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// components import
import Header from "./components/Header";

// pages import
import Home from "./pages/Home";
import Venue from "./pages/Venue";

function App() {
  const [venuesData, setVenuesData] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue/:placeId" element={<Venue />} />
      </Routes>
    </Router>
  );
}

export default App;
