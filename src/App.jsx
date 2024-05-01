import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components import
import Header from "./components/Header";
import Hero from "./components/Hero";

// pages import
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
