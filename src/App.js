import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

import Home from './pages/home';

function App() {
  useEffect(() => {
    fetch('http://localhost:5001/')
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
