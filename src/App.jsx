import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components import
import Header from "./components/Header";

// pages import
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
