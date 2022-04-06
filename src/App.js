import React from 'react';
import './sass/main.scss';

import NavigationHorizontal from './components/NavigationHorizontal';
import NavigationVerticle from './components/NavigationVerticle';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header>
          <NavigationHorizontal />
          <NavigationVerticle />
      </header>
      <main>
      
    <Routes>
      <Route path="/" exact element={<Navigate replace to="/user/12" />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
    </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
