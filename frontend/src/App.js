import React from 'react';
import NavBar from './components/';
import { News, Footer } from './components/';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavBar />
      </header>
      <section className='app-news-section'>
        <News />
      </section>
      <footer className='footer-wrapper'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
