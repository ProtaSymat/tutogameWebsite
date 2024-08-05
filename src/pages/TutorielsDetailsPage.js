import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Square, ArrowRight, ArrowLeft } from 'react-feather';

const TutorielsDetailsPage = () => {
  const { tutorielId } = useParams();
  const [tutoriels, setTutoriels] = useState([]);
  const [chapitre, setChapitreDetails] = useState([]);
  const [tutoriel, setTutoriel] = useState(null);
  const navigate = useNavigate();
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  const userId = storedUserData.user_id;
  const [progress, setProgress] = useState({})
  const [blocs, setBlocs] = useState([]);
  const [blocCorrespondant, setBlocCorrespondant] = useState(null);


  useEffect(() => {
    if (tutoriel)
      setProgress({ ...progress, [tutoriel.tutoriel_id]: true });
  }, [tutoriel]);

  useEffect(() => {
    const fetchTutoriels = async () => {
      try {
        const urlTutoriel = `https://tutogame.alwaysdata.net/tutogameAPI/api/tutoriels`;
        const response = await fetch(urlTutoriel, {
          headers: {
            'Accept': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Erreur réseau lors de la récupération des tutoriels');
        }
        const data = await response.json();
        setTutoriels(data.tutoriels);
      } catch (error) {
        console.error("Erreur lors du chargement des tutoriels:", error);
      }
    };

    fetchTutoriels();
  }, []);

  useEffect(() => {
    const currentTutoriel = tutoriels.find(t => t.tutoriel_id === parseInt(tutorielId));
    setTutoriel(currentTutoriel);
  }, [tutoriels, tutorielId]);
  
  useEffect(() => {
    const fetchBlocs = async () => {
      try {
        const urlTutoriel = `https://tutogame.alwaysdata.net/tutogameAPI/api/blocs/`;
        const response = await fetch(urlTutoriel, {
          headers: {
            'Accept': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Erreur réseau lors de la récupération des tutoriels');
        }
        const data = await response.json();
        setBlocs(data.blocs);
      } catch (error) {
        console.error("Erreur lors du chargement des tutoriels:", error);
      }
    };

    fetchBlocs();
  }, []);

  useEffect(() => {
    if (tutoriel && blocs.length > 0) {
      const blocTrouve = blocs.find(bloc => bloc.tutoriel_id === tutoriel.tutoriel_id);
      setBlocCorrespondant(blocTrouve);
    }
  }, [tutoriel, blocs]);

  useEffect(() => {
    const fetchChapitreDetails = async () => {
      const chapitreId = tutoriel?.chapitre_id;
      if (!chapitreId) return;
  
      try {
        const response = await fetch(`https://tutogame.alwaysdata.net/tutogameAPI/api/chapitre/${chapitreId}`, {
          headers: {
            'Accept': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Erreur réseau lors de la récupération des détails du chapitre');
        }
        const data = await response.json();
        setChapitreDetails(data.chapitre); // Suppose que `data.chapitre` est l'objet contenant les données
      } catch (error) {
        console.error("Erreur lors du chargement des détails du chapitre:", error);
      }
    };
  
    fetchChapitreDetails();
  }, [tutoriel]);


  const formatDateTime = (date) => {
    const padToTwo = (num) => num.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = padToTwo(date.getMonth() + 1);
    const day = padToTwo(date.getDate());
    const hours = padToTwo(date.getHours());
    const minutes = padToTwo(date.getMinutes());
    const seconds = padToTwo(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const renderProgressSquares = () => {
    const tutorielsChapitre = tutoriels
      .filter(t => t.chapitre_id === tutoriel.chapitre_id)
      .sort((a, b) => a.ordre - b.ordre);
  
    const currentIndex = tutorielsChapitre.findIndex(t => t.tutoriel_id === parseInt(tutorielId));
  
    return tutorielsChapitre.map((t, index) => {
      let color = 'bg-gray';
      if (index < currentIndex) color = 'bg-success';
      if (index === currentIndex) color = 'bg-info';
  
      const isLastSquare = index === tutorielsChapitre.length - 1;
      const marginClass = isLastSquare ? '' : 'me-3';
  
      return <div key={t.tutoriel_id} className={`square ${color} ${marginClass}`} />;
    });
  };


  const navigateToTutoriel = async (direction) => {
    const currentTutoriel = tutoriels.find(t => t.tutoriel_id === parseInt(tutorielId));
    const newOrder = currentTutoriel.ordre + direction;
    const newTutoriel = tutoriels.find(t => t.ordre === newOrder);
  
    const isLastTutoriel = !newTutoriel; // Vérifie si c'est le dernier tutoriel
    const finished = isLastTutoriel ? 1 : 0; // Si c'est le dernier tutoriel, alors finished = 1
  
    const currentDatetime = formatDateTime(new Date());
  
    try {
      const response = await fetch('https://tutogame.alwaysdata.net/tutogameAPI/api/add-progression', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `user_id=${encodeURIComponent(userId)}&chapitre_id=${encodeURIComponent(currentTutoriel.chapitre_id)}&last_tutoriel_id=${encodeURIComponent(currentTutoriel.tutoriel_id)}&chapitre_termine=${encodeURIComponent(finished)}&date_derniere_progression=${encodeURIComponent(currentDatetime)}`,
      });
  
      if (!response.ok) {
        throw new Error('Erreur réseau lors de l\'enregistrement de la progression');
      }
      console.log("Progression enregistrée avec succès");
    } catch (error) {
      console.error("Erreur lors de l'enregistrement de la progression:", error);
    }
  
    if (isLastTutoriel) {
      navigate('/endTutoriel/');
    } else {
      navigate(`/tutoriels/${newTutoriel.tutoriel_id}`);
    }
  };

  if (!tutoriel) return <div>Chargement...</div>;

  return (
    <div>
         <div className="chapitre-container position-relative">
{chapitre && (
  <div> 
    <div className="bannerChapitre w-100"><img className="h-100 w-100 object-fit-cover" src={chapitre.chapitre_img} alt="Chapitre" /></div>
    <div className="position-absolute w-100" style={{transform: 'translateY(-50%)' }}>
      <div className="container pb-5">
        <div className="bg-primary text-white py-lg-5 py-3">
          <h1>{tutoriel.titre}</h1>
        </div>
      </div>
    </div>
    <div className="position-absolute w-100 d-flex justify-content-center" style={{top: '125%'}}>
      <div className="d-inline-flex flex-row border border-dark bg-white">
        {renderProgressSquares()}
      </div>
    </div>
  </div>
)}
</div>
<div className="container pt-mobile">
<p className="my-5">{tutoriel.description}</p>
        <div className="">
  {blocCorrespondant ? (
    <div className="bloc-content text-start">
      <h2 id="start">Contenu du tutoriel</h2>
      <div dangerouslySetInnerHTML={{ __html: blocCorrespondant.contenue }} />
    </div>
  ) : (
    <p>Aucun contenue du tutoriel correspondant trouvé.</p>
  )}
</div>
        <div className="d-flex justify-content-between mt-5 flex-lg-row flex-column">
          <button className="btn btn-outline-primary mb-lg-0 mb-3" onClick={() => navigateToTutoriel(-1)}>
          <ArrowLeft className="me-3"/> Revenir au tutoriel précédent
          </button>
          <button className="btn btn-primary text-white" onClick={() => navigateToTutoriel(1)}>
            Passer au tutoriel suivant <ArrowRight className="ms-lg-3 ms-0"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorielsDetailsPage;