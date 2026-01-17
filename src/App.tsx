import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { AboutPage } from '@/pages/AboutPage';

import { VideosPage } from '@/pages/VideosPage';
import { TreatmentDetailPage } from '@/pages/TreatmentDetailPage';

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