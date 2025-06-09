import React from 'react';
import curses from '../data/curses';
import './IndexPage.css';

function IndexPage({ onSelectPage }) {
  return (
    <div className="index-page">
      <h1>Curse Index</h1>
      <ul>
        {curses.map((curse, i) => (
          <li key={i} onClick={() => onSelectPage(curse)}>
          <span className="curse-name">{curse.name}</span>
          <span className="page-number"> Pg. {i + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPage;