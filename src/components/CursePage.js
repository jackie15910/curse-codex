import React from 'react';

function CursePage({ curse, goBack }) {
  return (
    <div className="Curse-Page">
      <button onClick={goBack}>← Back</button>
      <h1>{curse.name}</h1>
      <img src={curse.image} alt={curse.name} />
      <p><strong>Effect:</strong> {curse.description}</p>
      <p><em>{curse.flavor}</em></p>
    </div>
  );
}

export default CursePage;