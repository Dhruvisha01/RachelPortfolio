// import logo from "./logo.svg";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

// import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import UHCCaseStudy from "./pages/UHCCaseStudy";
import TimeToMoveCaseStudy from "./pages/TimeToMoveCaseStudy";
import ProofpointCaseStudy from "./pages/ProofpointCaseStudy";
import BikeLinkProCaseStudy from "./pages/BikeLinkProCaseStudy";
import ClientViewCaseStudy from "./pages/ClientViewCaseStudy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    fetch("https://rachelportfoliobackend.onrender.com/")
      .then((res) => res.text())
      .then((data) => console.log(data));
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
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
