import React from 'react';
import cover from '../assets/Cover.jpg';
import './Cover.css';
import lockSound from '../assets/Unlock.mp3';

function Cover({ onUnlock }) {
  const unlock = () => {
    new Audio(lockSound).play();
    setTimeout(onUnlock, 800); //Delay to allow sound to finish
  };

  return (
    <div className="Cover">
        <img src={cover} alt="Book Cover" />
        <button className="lock" onClick={unlock}></button>
    </div>
  );
}

export default Cover;