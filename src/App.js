import logo from "./logo.svg";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
/*import CustomCursorKinet from "./components/CustomCursorKinet";*/
import CustomCursor from "./components/customCursor";
import CustomCursorKinet from "./components/customCursorKinet";
function App() {
  useEffect(() => {
    fetch("https://rachelportfoliobackend.onrender.com/")
      .then((res) => res.text())
      .then((data) => console.log(data));
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <CustomCursorKinet /> */}
        {/* <CustomCursor /> */}
        <CustomCursorKinet />
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
