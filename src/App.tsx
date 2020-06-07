import React from 'react';
import './App.css';

import usePeople from './usePeople';

function App() {
  const {people, isLoading} = usePeople();
  const generatedAt = people && new Date(people.generatedAt);
  console.log(generatedAt);
  return (
    <div className="App">
      <header className="App-header">
        <h1>University People Counts</h1>
      </header>
        { isLoading && <div className="App-loading">Loading &hellip;</div> }
        {
          people && people.counts.map(({count, title, description}, idx) => (
            <div className="App-count" key={idx}>
              <h2>{title}</h2>
              <p>{description}</p>
              <p>{count}</p>
            </div>
          ))
        }
      <footer className="App-footer">
        { generatedAt && <>Generated at {generatedAt.toLocaleString()}.</> }
      </footer>
    </div>
  );
}

export default App;
