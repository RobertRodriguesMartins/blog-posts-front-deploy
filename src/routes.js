import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { NewsDetails, CreateNews } from './components/';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts/create" element={<CreateNews />} />
        <Route path="/posts/:id" element={<NewsDetails />} />
        <Route
          path="*"
          element={<h1>Não encontrei nada por aqui :/</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
