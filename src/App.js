import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import LoginModal from './components/LoginModal';
import JobDetailModal from './components/JobDetailModal';

function App() {
  const location = useLocation();
  const background = location.state && location.state.backgroundLocation;
  console.log(location.state);
  // const auth = useContext(AuthContext);

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route
          path="*"
          element={(
            <main>
              <p>404 Page not found</p>
            </main>
          )}
        />
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginModal />} />
        <Route path="/job/:id" element={<JobDetailModal />} />
      </Routes>
    </>
  );
}

export default App;
