import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AboutPage } from './components/AboutPage';

import { VideosPage } from './components/VideosPage';
import { TreatmentDetailPage } from './components/TreatmentDetailPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="videos" element={<VideosPage />} />
            <Route path="treatments/:id" element={<TreatmentDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;