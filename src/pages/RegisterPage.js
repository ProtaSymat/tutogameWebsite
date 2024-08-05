import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Coin from '../components/coin';
import coinImage1 from '../../src/img/coin.png';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const generatePieces = (numPieces) => {
    const coins = [];
    const images = [coinImage1];
    for (let i = 0; i < numPieces; i++) {
      const imageSrc = images[Math.floor(Math.random() * images.length)];
      coins.push(<Coin key={i} imageSrc={imageSrc} />);
    }
    return coins;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    } else {
      setPasswordsMatch(true);
    }

    try {
      const response = await fetch('https://tutogame.alwaysdata.net/tutogameAPI/api/add-user', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&role=USER`,
      });
      const data = await response.json();
      if (data.message === "Saved") {
        navigate('/login'); // Redirection en cas de succès
      } else {
        alert("Erreur d'inscription: " + (data.message || ""));
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="login-page-container">
      {generatePieces(8)}
      <div className="mt-5 container d-flex justify-content-center">
                <div className="bg-gray d-flex justify-content-center flex-column p-3 text-start" style={{zIndex: 2000}}>
        <h1>Inscription</h1>
        <p>Remplis tes informations pour créer un compte</p>
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control border border-primary" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Nom d'utilisateur:</label>
            <input type="text" className="form-control border border-primary" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Mot de passe:</label>
            <input type="password" className="form-control border border-primary" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmer le mot de passe:</label>
            <input type="password" className={`form-control border border-${!passwordsMatch ? 'danger' : 'primary'}`} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            {!passwordsMatch && <div className="text-danger">Les mots de passe ne correspondent pas.</div>}
          </div>
          <div className="mb-5 text-end text-primary">
                        <a  className="text-decoration-none" href="/login">J'ai déjà un compte</a>
                    </div>
          <div><button type="submit" className="btn btn-primary">S'inscrire</button></div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default RegisterPage;