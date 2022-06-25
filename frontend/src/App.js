import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar.js';

function App() {
  const news = useSelector((state) => state.news);
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;
