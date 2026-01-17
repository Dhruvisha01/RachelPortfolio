// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import UHCCaseStudy from "./pages/UHCCaseStudy";
import TimeToMoveCaseStudy from "./pages/TimeToMoveCaseStudy";
import ProofpointCaseStudy from "./pages/ProofpointCaseStudy";
import BikeLinkProCaseStudy from "./pages/BikeLinkProCaseStudy";
import ClientViewCaseStudy from "./pages/ClientViewCaseStudy";
/*import CustomCursorKinet from "./components/CustomCursorKinet";*/
// import CustomCursor from "./components/customCursor";
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
          <Route path="/case-studies/uhc" element={<UHCCaseStudy />} />
          <Route
            path="/case-studies/time-to-move"
            element={<TimeToMoveCaseStudy />}
          />
          <Route
            path="/case-studies/proofpoint"
            element={<ProofpointCaseStudy />}
          />
          <Route
            path="/case-studies/bikelinkpro"
            element={<BikeLinkProCaseStudy />}
          />
          <Route
            path="/case-studies/clientview"
            element={<ClientViewCaseStudy />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
