import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import LoginModal from './components/LoginModal';
import JobDetailModal from './components/JobDetailModal';
import AuthContext from './auth/AuthContext';

function App() {
  const location = useLocation();
  const auth = useContext(AuthContext);

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
          {/* <Route path="job/:id" element={<JobDetail />} /> */}
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
        <Route path="/signin" element={<LoginModal />} />
      </Routes>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {auth.user ? (
        <Routes>
          <Route path="/job/:id" element={<JobDetailModal />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/job/:id" element={<LoginModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
