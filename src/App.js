import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import LoginModal from './components/LoginModal';
import JobDetailModal from './components/JobDetailModal';

function App() {
  // const background = location.state && location.state.backgroundLocation;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<LoginModal />} />
      <Route path="/job/:id" element={<JobDetailModal />} />
      <Route
        path="*"
        element={(
          <main>
            <p>404 Page not found</p>
          </main>
          )}
      />
    </Routes>
  );
}

export default App;
