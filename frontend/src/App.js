import React from 'react';
import NavBar from './components/';
import { News } from './components/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className='app-news-section'>
        <News />
      </section>
    </div>
  );
}

export default App;
