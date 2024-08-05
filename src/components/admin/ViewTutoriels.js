import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ViewTutoriels = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [currentView, setCurrentView] = useState('categories');
  const [chapitres, setChapitres] = useState([]);
  const [tutoriels, setTutoriels] = useState([]);

  const [categories, setCategories] = useState([]);
  const [newCategorie, setNewCategorie] = useState({
    categorie_name: '',
    categorie_description: '',
    categorie_img: ''
  });

  const [categorieName, setCategorieName] = useState('');
  const [categorieDescription, setCategorieDescription] = useState('');
  const [categorieImg, setCategorieImg] = useState('');

  const dataToUpdate = {};

if (categorieName) dataToUpdate.categorie_name = categorieName;
if (categorieDescription) dataToUpdate.categorie_description = categorieDescription;
if (categorieImg) dataToUpdate.categorie_img = categorieImg;
  useEffect(() => {
    fetchCategories();
  }, []);

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
      setCategories(data.categories);
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewCategorie({ ...newCategorie, [e.target.name]: e.target.value });
  };

const handleCategorieSubmit = async (e) => {
  e.preventDefault();
  
  const dataToUpdate = {};
  if (newCategorie.categorie_name) dataToUpdate.categorie_name = newCategorie.categorie_name;
  if (newCategorie.categorie_description) dataToUpdate.categorie_description = newCategorie.categorie_description;
  if (newCategorie.categorie_img) dataToUpdate.categorie_img = newCategorie.categorie_img;
  
  if (Object.keys(dataToUpdate).length === 0) {
    setError('Veuillez remplir au moins un champ pour mettre à jour.');
    return;
  }
  
  const url = 'https://tutogame.alwaysdata.net/tutogameAPI/api/add-category';
  const method = 'POST';
  
  const requestBody = new URLSearchParams(dataToUpdate).toString();

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody,
    });

    if (!response.ok) {
      const errorResponse = await response.text();
      throw new Error("Erreur lors de la requête fetch.");
    }

    const data = await response.json();
    console.log("Success Response:", data);
    setNewCategorie({ categorie_name: '', categorie_description: '', categorie_img: '' });
    setShowModal(false);
    fetchCategories();
    setError(null);
    setSuccess(true);
  } catch (error) {
    setError(error.message || 'Une erreur est survenue lors de l\'ajout/modification de la catégorie.');
    console.error('Erreur:', error);
  }
};

const fetchTutoriels = async () => {
  const urlTutoriels = "https://tutogame.alwaysdata.net/tutogameAPI/api/tutoriels";
  try {
    const response = await fetch(urlTutoriels, {
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Erreur réseau: Impossible de récupérer les tutoriels');
    }
    const data = await response.json();
    console.log(data);
    setTutoriels(data.tutoriels);
  } catch (error) {
    console.error('Erreur lors de la récupération des tutoriels:', error);
    setError(error.message);
  }
};

useEffect(() => {
  fetchTutoriels();
}, []);

const fetchChapitres = async () => {
  const urlChapitres = "https://tutogame.alwaysdata.net/tutogameAPI/api/chapitres";
  try {
    const response = await fetch(urlChapitres, {
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Erreur réseau: Impossible de récupérer les chapitres');
    }
    const data = await response.json();
    setChapitres(data.chapitres);
  } catch (error) {
    console.error('Erreur lors de la récupération des chapitres:', error);
    setError(error.message);
  }
};

useEffect(() => {
  fetchChapitres();
}, []);

const [newChapitre, setNewChapitre] = useState({
  categorie_id: '',
  titre: '',
  description: '',
  chapitre_contenu: '',
  ordre: '',
  chapitre_img: ''
});

const handleChapitreInputChange = (e) => {
  setNewChapitre({ ...newChapitre, [e.target.name]: e.target.value });
};

const handleChapitreSubmit = async (e) => {
  e.preventDefault();
  const url = 'https://tutogame.alwaysdata.net/tutogameAPI/api/add-chapitre';
  const requestBody = new URLSearchParams(newChapitre).toString();
console.log(requestBody);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la requête fetch.');
    }

    const data = await response.json();
    console.log("Success Response:", data);
    setNewChapitre({ categorie_id: '', titre: '', description: '', ordre: '', chapitre_img: '' });
    fetchChapitres();
    setError(null);
    setSuccess(true);
  } catch (error) {
    setError(error.message || 'Une erreur est survenue lors de l\'ajout du chapitre.');
    console.error('Erreur:', error);
  }
};

  return (
    <div className="mt-3 container">
      <div className="text-start border-bottom border-primary">
        <h1 className="k-suture fs-3">Gestion des cours</h1>
      </div>
      <section className="pt-3">
        <div className="mb-3 d-flex flex-lg-row flex-column text-center justify-content-center">
          <button className="btn btn-primary me-lg-2 mb-lg-0 mb-2" onClick={() => setCurrentView('categories')}>Catégories</button>
          <button className="btn btn-primary me-lg-2 mb-lg-0 mb-2" onClick={() => setCurrentView('chapitres')}>Chapitres</button>
          <button className="btn btn-primary" onClick={() => setCurrentView('tutoriels')}>Tutoriels</button>
        </div>

        {currentView === 'categories' && (
          <div>
            {categories.map((categorie) => (
              <div key={categorie.categorie_id} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-primary">
                <span>{categorie.categorie_name}</span>
                <div>
                  <a href="https://tutogame.alwaysdata.net/tutogameAPI/users/login" target="_blank" className="btn btn-sm btn-secondary me-2">✏️</a>
                  <a className="btn btn-sm btn-danger">🗑️</a>
                </div>
              </div>
            ))}
            <button className="btn btn-success mt-3" onClick={() => setShowModal(true)}>+ Ajouter une catégorie</button>
            {showModal && (
              <div className="modal show" onClick={() => setShowModal(false)}>
                <div className="modal-content container border border-primary rounded-0" onClick={e => e.stopPropagation()}>
                  <h2>Ajouter une catégorie</h2>
                  <form onSubmit={handleCategorieSubmit} className="d-flex flex-column">
                    <input type="text" className="form-control border border-primary mb-3" name="categorie_name" placeholder="Nom de la catégorie" value={newCategorie.categorie_name} onChange={handleInputChange} />
                    <input type="text" className="form-control border border-primary mb-3" name="categorie_description" placeholder="Description" value={newCategorie.categorie_description} onChange={handleInputChange}/>
                    <input type="text" className="form-control border border-primary mb-3" name="categorie_img" placeholder="Image URL" value={newCategorie.categorie_img} onChange={handleInputChange} />
                    <button type="submit" className="btn btn-primary text-white">Ajouter</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {currentView === 'chapitres' && (
  <div>
    {chapitres.map((chapitre) => (
      <div key={chapitre.id} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-primary">
        <span>{chapitre.titre}</span>
        <div>
          <button href="https://tutogame.alwaysdata.net/tutogameAPI/users/login" target="_blank" className="btn btn-sm btn-secondary me-2">✏️</button>
          <button className="btn btn-sm btn-danger">🗑️</button>
        </div>
      </div>
    ))}
    <button className="btn btn-success mt-3" onClick={() => setShowModal(true)}>+ Ajouter un chapitre</button>
    {showModal && (
      <div className="modal show" onClick={() => setShowModal(false)}>
        <div className="modal-content container border border-primary rounded-0" onClick={e => e.stopPropagation()}>
          <h2>Ajouter un chapitre</h2>
          <form onSubmit={handleChapitreSubmit} className="d-flex flex-column">
  <select name="categorie_id" className="form-control border border-primary mb-3" value={newChapitre.categorie_id} onChange={handleChapitreInputChange}>
    <option value="">Sélectionnez une catégorie</option>
    {categories.map((categorie) => (
      <option key={categorie.categorie_id} value={categorie.categorie_id}>
        {categorie.categorie_name}
      </option>
    ))}
  </select>
  <input type="text" className="form-control border border-primary mb-3" name="titre" placeholder="Titre du chapitre" value={newChapitre.titre} onChange={handleChapitreInputChange} />
  <input type="text" className="form-control border border-primary mb-3" name="description" placeholder="Description" value={newChapitre.description} onChange={handleChapitreInputChange}/>
  <input type="number" className="form-control border border-primary mb-3" name="ordre" placeholder="Ordre" value={newChapitre.ordre} onChange={handleChapitreInputChange} />
  <input type="text" className="form-control border border-primary mb-3" name="chapitre_img" placeholder="Image URL" value={newChapitre.chapitre_img} onChange={handleChapitreInputChange} />
            <button type="submit" className="btn btn-primary text-white">Ajouter</button>
          </form>
        </div>
      </div>
    )}
  </div>
)}

        

        {currentView === 'tutoriels' && (
           <div className="container mt-3">
           <div>
             {error && <p>Erreur : {error}</p>}
             {tutoriels.length > 0 ? (
              tutoriels.map((tutoriel) => (
                <div key={tutoriel.tutoriel_id} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-primary">
                  <span className="small">{tutoriel.titre}</span>
                  <div>
                  <button href="https://tutogame.alwaysdata.net/tutogameAPI/users/login" target="_blank" className="btn btn-sm btn-secondary mb-2">✏️</button>
                  <button className="btn btn-sm btn-danger">🗑️</button>
                </div>
                  </div>
              ))
            ) : (
              <p>Aucun tutoriel trouvé.</p>
            )}
      <Link to={`/ajout-tutoriel`} className="btn btn-primary">Ajouter un tutoriel</Link>

           </div>
         </div>
        )}
      </section>
    </div>
  );
};

export default ViewTutoriels;