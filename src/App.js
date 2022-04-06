import React from 'react';
import './sass/main.scss';

import NavigationHorizontal from './components/NavigationHorizontal';
import NavigationVerticle from './components/NavigationVerticle';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

/**
 * App component managing routing
 * @component
 * @example
 * returns (
 *  <App />
 * )
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
          <NavigationHorizontal />
          <NavigationVerticle />
      </header>
      <main className="app__container">
      
    <Routes>
      <Route path="/" exact element={<Navigate replace to="/user/12" />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
    </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
