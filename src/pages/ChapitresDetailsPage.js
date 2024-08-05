import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate  } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

const ChapitresDetailsPage = () => {
  const navigate = useNavigate(); // Ajout de useNavigate
  const { chapitreId } = useParams();
  const [chapitre, setChapitre] = useState(null);
  const [tutoriels, setTutoriels] = useState([]);
  const [error, setError] = useState(null);
  const firstTutoriel = tutoriels.length > 0 ? tutoriels.reduce((prev, current) => (prev.ordre < current.ordre) ? prev : current) : null;


  useEffect(() => {
    fetchChapitre();
    fetchTutoriels();
  }, [chapitreId]);
  
  const fetchChapitre = async () => {
    const url = `https://tutogame.alwaysdata.net/tutogameAPI/api/chapitre/${chapitreId}`;
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Erreur réseau');
      }
      const data = await response.json();
      setChapitre(data.chapitre); // Mise à jour pour utiliser data.chapitre
    } catch (error) {
      setError(error.toString());
    }
  };

  const fetchTutoriels = async () => {
    const url = `https://tutogame.alwaysdata.net/tutogameAPI/api/tutoriels`;
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
        },
      });
      const data = await response.json();
      const tutorielsFiltres = data.tutoriels.filter(t => t.chapitre_id === parseInt(chapitreId));
      setTutoriels(tutorielsFiltres);
    } catch (error) {
      setError(error.toString());
    }
  };

  const handleGoToFirstTutorial = () => {
    const userIsLoggedIn = localStorage.getItem('userData');
    if (!userIsLoggedIn) {
      navigate('/pricing');
    } else {
      navigate(`/tutoriels/${firstTutoriel.tutoriel_id}`);
    }
  };
  return (
    <div>
      <div className="chapitre-container position-relative">
      {chapitre && (
        <div>
          <div className="bannerChapitre w-100">
            <img className="h-100 w-100 object-fit-cover" src={chapitre.chapitre_img} alt="Chapitre" />
          </div>
          <div className="position-absolute" style={{ top: '1.2vw', left: '1.2vw' }}>
          <a className="btn btn-dark" href="/chapitres"><ArrowLeft/> Revenir aux chapitres</a>
        </div>
          <div className="position-absolute w-100"  style={{transform: 'translateY(-50%)' }}>
            <div className="container mt-5" style={{ paddingTop: '5vw' }}>
              <div className="bg-primary text-white py-4 px-3">
                <h1>{chapitre.titre}</h1>
              </div>
              <p className="my-4 text-start">{chapitre.description}</p>
            </div>
          </div>         
        </div>
      )}
      <div className="container mt-5" style={{ paddingTop: '10vw' }}>
        <h2 className="py-5 mt-lg-0 mt-5">Les tutoriels présent dans le chapitre : </h2>
        {tutoriels.length > 0 ? (
          tutoriels.map((tutoriel) => (
            <div className="text-start pb-4 container" key={tutoriel.tutoriel_id}>
              <h3>{tutoriel.titre}</h3>
              <p>{tutoriel.description}</p>
            </div>
          ))
        ) : (
          <p>Aucun tutoriel trouvé pour ce chapitre.</p>
        )}
    </div>
    {firstTutoriel && (
            <button onClick={handleGoToFirstTutorial} className="btn btn-primary text-white">
              Suivre le cours
            </button>
          )}
        </div>
        </div>
      );
};

export default ChapitresDetailsPage;