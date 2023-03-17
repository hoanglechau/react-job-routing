import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route
        path="*"
        element={(
          <main>
            <p>There is nothing here!</p>
          </main>
              )}
      />
    </Routes>
  );
}

export default App;
