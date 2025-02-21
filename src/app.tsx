import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// Pages
import Home from '@app/pages';
import Unovis from '@app/pages/unovis';
import RegionBasedClustering from '@app/pages/unovis/region-based-clustering';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='unovis' element={<Unovis />}>
            <Route
              path='region-based-clustering'
              element={<RegionBasedClustering />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
