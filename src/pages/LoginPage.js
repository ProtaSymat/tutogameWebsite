import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Coin from '../components/coin';
import coinImage1 from '../../src/img/coin.png';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = 'https://tutogame.alwaysdata.net/tutogameAPI/api/user/login';
        fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
            })
            .then(response => {
                console.log('Réponse reçue de l\'API', response);
                if (!response.ok) {
                  return response.json().then(errorData => {
                    setErrorMessage(`Erreur de connexion`);
                  });
                }
                return response.json();
              })
              .then(data => {
                console.log('Données reçues de l\'API', data);
              
                if (data.token && data.userEnt) {
                  localStorage.setItem('token', data.token);
                  localStorage.setItem('userData', JSON.stringify(data.userEnt));
                  navigate('/compte');
                  console.log('Connexion réussie :', data);
                } else {
                }
              })
              .catch(error => {
                setErrorMessage(`Erreur lors de la connexion`);
              });
    };

    return ( 
      <div className="login-page-container">
      {generatePieces(8)}
      <div className="mt-5 container d-flex justify-content-center">
                <div className="bg-gray d-flex justify-content-center flex-column p-3 text-start" style={{zIndex: 2000}}>
                    <h1>Rejoins<br/>le Game!</h1>
                    <p>Remplis tes informations pour te connecter</p>
                 <form className="d-flex flex-column" onSubmit = {handleSubmit}>
                    {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
                    <div className="mb-5 d-flex flex-column">
                        <label className="k-suture mb-2" > Email: </label>
                        <input className="form-control w-100 text-primary border border-primary" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                    </div>
                    <div className="mb-2 d-flex flex-column">
                        <label className="k-suture mb-2">Mot de passe :</label >
                        <input className="form-control w-100 text-primary border border-primary" type="password" value = {password} onChange = {(e) => setPassword(e.target.value)} required /> 
                    </div>
                    <div className="mb-5 text-end text-primary">
                        <a  className="text-decoration-none" href="/register">Je n'ai pas de compte</a>
                    </div>
                    <div><button className="btn btn-primary text-white" type="submit">Connexion</button></div>
                </form>
                </div>
            </div> 
            </div>); }

export default LoginPage;