import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AccountDetails() {
  const navigate = useNavigate();
  const [user, setUser] = useState({username: '', email: '', created: '', role: '', date_inscription: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      const storedUserData = localStorage.getItem('userData');
      let userId;
        const parsedUserData = JSON.parse(storedUserData);
        userId = parsedUserData.user_id;
    
      if (!userId) {
        console.error('User ID is missing');
        return;
      }

        const url = `https://tutogame.alwaysdata.net/tutogameAPI/api/user/${userId}`;

    try {
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json',
          }
        });
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        const data = await response.json();
        console.log('Data:', data); // Ajoutez cette ligne
        setUser(data.user); // Changez cette ligne
        setIsLoading(false);
      } catch (error) {
        console.log('Erreur lors de la récupération des données utilisateur:', error);
      }
    };
    fetchData();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-100">
      <h2 style={{ textAlign: 'center' }}>Détails du compte</h2>
      <div className="d-flex flex-column align-items-start justify-content-center text-start h-100">
        <span className="mb-4" style={{ fontWeight: 'bold' }}>Nom d'utilisateur : <span style={{ fontWeight: 'normal' }}>{user.username}</span></span>
        <span className="mb-4" style={{ fontWeight: 'bold' }}>Email : <span style={{ fontWeight: 'normal' }}>{user.email}</span></span>
        <span className="mb-4" style={{ fontWeight: 'bold' }}>Date de création : <span style={{ fontWeight: 'normal' }}>{
              new Date(user.date_inscription).toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
            }</span></span>
        <span className="mb-4" style={{ fontWeight: 'bold' }}>Rôle : <span style={{ fontWeight: 'normal' }}>{user.role}</span></span>
      </div>
    </div>
  );
}
  
export default AccountDetails;