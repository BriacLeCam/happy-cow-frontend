import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components import
import Header from "./components/Header";

// pages import
import Home from "./pages/Home";
import Venue from "./pages/Venue";

function App() {
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
