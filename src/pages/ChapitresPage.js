import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Search, Settings, Layers } from 'react-feather'; // Importez Layers pour l'icône des catégories

const ChapitresPage = () => {
  const [chapitres, setChapitres] = useState([]);
  const [categories, setCategories] = useState([]); // État pour les catégories
  const [categorieSelectionnee, setCategorieSelectionnee] = useState(''); // État pour la catégorie sélectionnée
  const [tri, setTri] = useState('recent-desc');
  const [recherche, setRecherche] = useState(''); // État pour la valeur de recherche
  const [afficherSelectTri, setAfficherSelectTri] = useState(false);
  const [afficherSelectCategorie, setAfficherSelectCategorie] = useState(false); // État pour contrôler l'affichage du select des catégories
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchChapitres();
    fetchCategories(); // Récupérez les catégories dès le chargement du composant
  }, [tri]);

  const fetchChapitres = async () => {
    const url = "https://tutogame.alwaysdata.net/tutogameAPI/api/chapitres";
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Erreur réseau');
      }
      let data = await response.json();
      data = data.chapitres;
      trierChapitres(data);
    } catch (error) {
      setError(error.toString());
      console.error('Error:', error);
    }
  };

  const fetchCategories = async () => {
    const urlCategories = "https://tutogame.alwaysdata.net/tutogameAPI/api/categories";
    try {
      const response = await fetch(urlCategories, {
        headers: {
          'Accept': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Erreur réseau');
      }
      const data = await response.json();
      console.log(data.categories); // Ajout pour débogage
      setCategories(data.categories);
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
    }
  };

  const trierChapitres = (chapitres) => {
    switch (tri) {
      case 'alpha-asc':
        chapitres.sort((a, b) => a.titre.localeCompare(b.titre));
        break;
      case 'alpha-desc':
        chapitres.sort((a, b) => b.titre.localeCompare(a.titre));
        break;
      default:
        break;
    }
    setChapitres(chapitres);
  };

  const handleChange = (event) => {
    setTri(event.target.value);
  };

  const handleChangeCategorie = (event) => {
    setCategorieSelectionnee(event.target.value);
  };

  const handleRechercheChange = (event) => {
    setRecherche(event.target.value);
  };

  const chapitresFiltres = chapitres.filter(chapitre =>
    chapitre.titre.toLowerCase().includes(recherche.toLowerCase()) &&
    (categorieSelectionnee ? chapitre.categorie_id === parseInt(categorieSelectionnee) : true)
  );

  if (error) {
    return <div>Erreur lors de la récupération des chapitres: {error}</div>;
  }

  return (
    <div className="mt-5 container">
      <Helmet>
        <title>Chapitres - Tutogame</title>
        <meta name="description" content="Découvrez les chapitres disponibles" />
      </Helmet>
      <div className="d-flex border-bottom border-primary pb-3 align-items-center">
      <h1 className="text-start">Nos chapitres</h1>
      </div>
      <div className="d-flex align-items-center justify-content-between flex-lg-row flex-column pt-3 w-100">
          <select onChange={handleChange} value={tri} className="form-select border border-primary me-lg-2 w-lg-25 mb-3 mb-lg-0 w-100">
            <option value="alpha-asc">A - Z</option>
            <option value="alpha-desc">Z - A</option>
          </select>
          <select onChange={handleChangeCategorie} value={categorieSelectionnee} className="form-select border border-primary ms-lg-2 w-lg-25 mb-3 mb-lg-0 w-100">
            <option value="">Toutes les catégories</option>
            {categories.map(categorie => (
              <option key={categorie.categorie_id} value={categorie.categorie_id}>{categorie.categorie_name}</option>
            ))}
          </select>
          <div className="input-group border border-primary w-lg-50 w-100 ms-lg-5 mb-3 mb-lg-0">
            <span className="input-group-text" id="basic-addon1"><Search /></span>
            <input type="text" className="form-control" placeholder="Rechercher un chapitre..." aria-label="Rechercher" aria-describedby="basic-addon1" value={recherche} onChange={handleRechercheChange}/>
          </div>
        </div>

      <section className="pt-3">
        {chapitresFiltres.length > 0 ? (
          <div className="row">
            {chapitresFiltres.map((chapitre, index) => {
              const categorieAssociee = categories.find(categorie => categorie.categorie_id === chapitre.categorie_id);
              return (
                <div key={index} className="col-lg-4 col-12 mb-3">
                  <Link to={`/chapitres/${chapitre.chapitre_id}`} className="d-flex flex-column bg-primary h-100 text-decoration-none">
                    <img src={chapitre.chapitre_img} alt={chapitre.titre} className="w-100" />
                    <div className="text-white p-4 text-start">
                      <span className="badge bg-white text-primary">{categorieAssociee ? categorieAssociee.categorie_name : 'Catégorie inconnue'}</span>
                      <h2 className="fs-4 py-2">{chapitre.titre}</h2>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Aucun chapitre trouvé</div>
        )}
      </section>
    </div>
  );
};

export default ChapitresPage;