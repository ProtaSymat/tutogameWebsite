import React from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

export default function EndTutorielPage() {
  const navigate = useNavigate();

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    textAlign: 'center',
  };

  const buttonStyle = {
    margin: '10px',
    width: '200px',
  };

  return (
    <div style={pageStyle}>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <h1>Chapitre terminé !</h1>
      <div className="d-flex flex-column">
        <button 
          className="btn btn-primary" 
          style={buttonStyle} 
          onClick={() => navigate('/')}
        >
          Accueil
        </button>
        <button 
          className="btn btn-secondary" 
          style={buttonStyle} 
          onClick={() => navigate('/chapitres')}
        >
          Autres chapitres
        </button>
      </div>
    </div>
  );
}