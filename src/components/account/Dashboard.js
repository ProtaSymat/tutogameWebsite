import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User as UserIcon, Lock as AdminIcon } from 'react-feather';

function Dashboard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const userData = JSON.parse(localStorage.getItem('userData'));
  const username = userData?.username || 'Utilisateur';
  const userRole = userData?.role || 'USER';
  const userId = userData?.user_id;


  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    navigate('/login');
  };
  const handleDeleteAccount = async () => {
    console.log('[handleDeleteAccount] Préparation de la requête de suppression');
    const url = `https://tutogame.alwaysdata.net/tutogameAPI/api/delete-user/${userId}`;
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du compte');
      }
  
      const responseData = await response.json();
      console.log('[handleDeleteAccount] Suppression réussie', responseData);
    } catch (error) {
      console.error('[handleDeleteAccount] Erreur:', error);
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="text-end">
        {userRole === 'ADMIN' ? (
          <span className="badge bg-danger"><AdminIcon /> Admin</span>
        ) : (
          <span className="badge bg-primary"><UserIcon /> Utilisateur</span>
        )}
      </div>
      <div className="d-flex flex-column justify-content-center text-start mt-5 h-100">
        <h1 className="fs-2">Salut, {username} <UserIcon className="text-primary" /></h1>
        <p className="mb-5 fs-4">
          Je ne suis pas {username}, <a href="#logout" onClick={handleLogout} className="fw-bold">je me déconnecte</a>.
        </p>
        <button className="btn btn-danger mt-auto ms-auto" onClick={() => setShowModal(true)}>Supprimer mon compte</button>

        {showModal && (
          <div className="modal show" onClick={() => setShowModal(false)}>
            <div className="modal-content container" onClick={e => e.stopPropagation()}>
              <h5>Confirmation</h5>
              <p>Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.</p>
              <div className="d-flex flex-row">
                <button className="btn btn-secondary me-3" onClick={() => setShowModal(false)}>Annuler</button>
                <button className="btn btn-danger" onClick={handleDeleteAccount}>Supprimer</button>
              </div>
            </div>
          </div>
        )}

        {error && <div className="text-danger mt-3">Erreur: {error}</div>}
        {success && <div className="text-success mt-3">Compte supprimé avec succès!</div>}
      </div>
    </div>
  );
}

export default Dashboard;
