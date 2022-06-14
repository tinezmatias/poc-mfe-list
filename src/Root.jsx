// Vendor
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Internal
import './index.css';
import { DataProvider } from './provider';
import { AppProvider } from './context';
import Discover from './containers/Discover';

function Root() {
  return (
    <AppProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Discover />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AppProvider>
  );
}

export default Root;
