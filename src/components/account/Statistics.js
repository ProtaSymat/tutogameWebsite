import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'react-feather';


function Statistics() {
  const navigate = useNavigate();
  const [progressions, setProgressions] = useState([]);
  const [chapitres, setChapitres] = useState({});
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  const userId = storedUserData.user_id;

  useEffect(() => {
    const fetchChapitres = async () => {
      try {
        const response = await fetch('https://tutogame.alwaysdata.net/tutogameAPI/api/chapitres', {
          headers: {
            'Accept': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Erreur réseau lors de la récupération des chapitres');
        }
        const result = await response.json();
        const chapitresData = result.chapitres;
        if (Array.isArray(chapitresData)) {
          const chapitresMap = {};
          chapitresData.forEach(chapitre => {
            chapitresMap[chapitre.chapitre_id] = chapitre.titre;
          });
          setChapitres(chapitresMap);
        } else {
          console.error('La structure de la réponse de l\'API est inattendue:', result);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des chapitres:", error);
      }
    };
  
    fetchChapitres();
  }, []);

  useEffect(() => {
    const fetchProgressions = async () => {
      try {
        const response = await fetch('https://tutogame.alwaysdata.net/tutogameAPI/api/progressions', {
          headers: {
            'Accept': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Erreur réseau lors de la récupération des progressions');
        }
        const data = await response.json();
        
        if (data.progressions && Array.isArray(data.progressions)) {
          const userProgressions = data.progressions.filter(p => p.user_id === userId && p.chapitre_termine);
          setProgressions(userProgressions);
        } else {
          console.error('La structure de la réponse de l\'API est inattendue:', data);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des progressions:", error);
      }
    };

    fetchProgressions();
  }, [userId, chapitres]);

  return (
    <div>
        <h1>Statistiques</h1>
        <h2 className="my-3">Chapitres terminés</h2>
        {progressions.length > 0 ? (
          <ul className="p-0">
            {progressions.map((progression) => (
              <li className="bg-success text-white k-suture py-3 mb-2 d-flex flex-lg-row flex-column justify-content-center" key={progression.progression_id}>
                Chapitre: {chapitres[progression.chapitre_id] || 'Titre inconnu'} - Terminé le {
                  new Date(progression.date_derniere_progression).toLocaleDateString('fr-FR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })
                } <Check className="ms-4"/>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun chapitre terminé pour le moment.</p>
        )}
    </div>
  );
}

export default Statistics;