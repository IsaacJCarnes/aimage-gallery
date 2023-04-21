import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css';
import App from './js/App';
import Gallery from './js/Gallery';

ReactDOM.createRoot(document.getElementById('root')
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/aimage-gallery" element={<App />}>
          <Route index element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
