// routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from '../components/Banner';
import NotFound from '../pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Banner />
          </>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
