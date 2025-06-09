import React from 'react';
import CurseEntry from './CurseEntry';
import './CursePage.css';

function CursePage({ curse, goBack }) {
  return (
    <div className="curse-page">
      <button onClick={goBack}>Back</button>
      <CurseEntry curse={curse} />
    </div>
  );
}

export default CursePage;