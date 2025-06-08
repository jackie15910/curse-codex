import React from 'react';
import curses from '../data/curses';

function IndexPage({ onSelectPage }) {
  return (
    <div className="index-page">
      <h1>Curse Index</h1>
      <ul>
        {curses.map((curse, i) => (
          <li key={i} onClick={() => onSelectPage(curse)}>
            {curse.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPage;