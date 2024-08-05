import React, { useEffect, useState } from 'react';

const AddArticles = () => {
  const [newArticle, setNewArticle] = useState({
    articles_titre: '',
    user_id: '',
    articles_img: '',
    articles_content: '',
    articles_excerpt: '',
    articles_created: '',
    articles_modified: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData && userData.user_id) {
        setNewArticle(prevState => ({
          ...prevState,
          user_id: userData.user_id,
        }));
      }
    } catch (err) {
      console.error('Error parsing user data from localStorage:', err);
    }
}, []);

  const handleInputChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { articles_titre, articles_img, articles_content, articles_excerpt, user_id } = newArticle;

    if (!articles_titre || !articles_content || !articles_excerpt || !user_id) {
      setError('Veuillez remplir tous les champs requis.');
      return;
    }

    const currentDatetime = formatDateTime(new Date());

    try {
      const response = await fetch('https://tutogame.alwaysdata.net/tutogameAPI/api/add-article', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `articles_titre=${encodeURIComponent(articles_titre)}&articles_img=${encodeURIComponent(articles_img)}&articles_content=${encodeURIComponent(articles_content)}&articles_excerpt=${encodeURIComponent(articles_excerpt)}&user_id=${encodeURIComponent(user_id)}&articles_created=${encodeURIComponent(currentDatetime)}&articles_modified=${encodeURIComponent(currentDatetime)}`,
      });

      const data = await response.json();

      if (!response.ok || data.message !== 'Success') {
        throw new Error(data.message || 'Erreur lors de l\'ajout de l\'article');
      }

      setSuccess(true);
      console.log('Article ajouté avec succès:', data);
    } catch (error) {
      setError(error.message || 'Une erreur est survenue lors de l\'ajout de l\'article.');
      console.error('Erreur:', error);
    }
  };

  

  return (
    <div className="mt-5 container">
      <div className="text-start border-bottom border-primary pb-3">
        <h1 className="k-suture fs-3">Ajouter un article</h1>
      </div>
      <section className="pt-3">
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <input type="text" name="articles_titre" className="form-control w-100 text-primary border border-primary mb-3" value={newArticle.articles_titre} onChange={handleInputChange} placeholder="Titre" required />
          <input type="text" name="articles_img" className="form-control w-100 text-primary border border-primary mb-3" value={newArticle.articles_img} onChange={handleInputChange} placeholder="Image URL" />
          <textarea name="articles_content" className="form-control w-100 text-primary border border-primary mb-3" value={newArticle.articles_content} onChange={handleInputChange} placeholder="Contenu" required></textarea>
          <textarea name="articles_excerpt" className="form-control w-100 text-primary border border-primary mb-3" value={newArticle.articles_excerpt} onChange={handleInputChange} placeholder="Extrait" required></textarea>
          <button type="submit" className="btn btn-primary">Ajouter l'article</button>
        </form>
        {error && <div className="text-success mt-3">Article ajouté avec succès!</div>}
      </section>
    </div>
  );
};

export default AddArticles;
