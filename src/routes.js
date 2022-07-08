import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { NewsDetails, CreateNews } from './components/';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news/create" element={<CreateNews />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route
          path="*"
          element={<h1>Rota inválida, recurso não enontrado :/</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
