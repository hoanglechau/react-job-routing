import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import LoginModal from './components/LoginModal';
import JobDetailModal from './components/JobDetailModal';
import JobDetail from './pages/JobDetail';
import Login from './pages/Login';

function App() {
  const location = useLocation();

  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/job/search/:id" element={<JobDetail />} />
          <Route path="/job/search/login" element={<Login />} />
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
      <Routes>
        <Route path="/login" element={<LoginModal />} />
      </Routes>
      <Routes>
        <Route path="/job/:id" element={<JobDetailModal />} />
      </Routes>
    </>
  );
}

export default App;
