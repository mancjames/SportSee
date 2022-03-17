import React from 'react';
import './sass/main.scss';

import NavigationHorizontal from './components/NavigationHorizontal';
import NavigationVerticle from './components/NavigationVerticle';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div className="App">
      <header>
          <NavigationHorizontal />
          <NavigationVerticle />
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
