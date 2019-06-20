import React from 'react';
import './App.css';
import SearchOptions from './SearchOptions/SearchOptions';
import Results from './Results/Results';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <SearchOptions />
      <Results />
    </div>
  );
}

export default App;
