import React from 'react';
import './sass/main.scss';

import NavigationHorizontal from './components/NavigationHorizontal';
import NavigationVerticle from './components/NavigationVerticle';

function App() {

  return (
    <div className="App">
      <header>
          <NavigationHorizontal />
          <NavigationVerticle />
      </header>
    </div>
  );
}

export default App;
