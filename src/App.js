import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
/*import CustomCursorKinet from "./components/CustomCursorKinet";*/
import CustomCursor from "./components/customCursor";
import CustomCursorKinet from "./components/customCursorKinet";
function App() {
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  useEffect(() => {
    fetch("https://rachelportfoliobackend.onrender.com/")
      .then((res) => res.text())
      .then((data) => console.log(data));

    const isMouseDevice = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setShowCustomCursor(isMouseDevice);
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <CustomCursorKinet /> */}
        {/* <CustomCursor /> */}
        {showCustomCursor && <CustomCursorKinet />}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
