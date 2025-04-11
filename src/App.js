import logo from './logo.svg';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import Home from './pages/home';
import About from "./pages/about";

function App() {
  useEffect(() => {
    fetch('http://localhost:5001/')
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
