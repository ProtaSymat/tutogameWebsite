import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const url = "https://tutogame.alwaysdata.net/tutogameAPI/api/articles";

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
      setArticles(data.articles);
    } catch (error) {
      setError(error.toString());
      console.error('Error:', error);
    }
  };

  if (error) {
    return <div>Erreur lors de la récupération des articles: {error}</div>;
  }


  return (
    <div className="mt-5 container">
      <Helmet>
        <title>Articles - Tutogame</title>
        <meta name="description" content="Contact" />
      </Helmet>
      <div className="text-start border-bottom border-primary pb-3">
        <h1 className="k-suture">Articles de presse</h1>
        <p className="k-suture mb-0">Découvrez les dernières tendances et nouveautés du monde du jeu vidéo, du développement web et du code sur notre page Actualités. Restez informé avec des articles exclusifs, analyses et interviews de développeurs passionnés. Ne manquez rien de l'actualité tech et gaming avec TutoGame.</p>
      </div>
      <section className="pt-3 d-flex justify-content-center">
        {articles.length > 0 ? (
          <div className="w-100">
            {articles.map((article, index) => (
              <div key={index} className="bg-primary mb-3">
                <div className="row p-3">
                  <div className="col-lg-6 col-12">
                    <img src={article.articles_img} alt="Article" className="w-100 object-fit-cover" />
                  </div>
                  <div className="col-lg-6 col-12 text-white text-start d-flex flex-column pt-3 pt-lg-0">
                    <h2>{article.articles_titre}</h2>
                    <p>{article.articles_excerpt}</p>
                    <div className="mt-auto"><Link to={`/news/${article.articles_id}`} className="btn btn-dark text-white" style={{ textDecoration: 'none' }}>
                      Lire la suite
                    </Link></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Aucun article trouvé</div>
        )}
      </section>
    </div>
  );
};

export default NewsPage;
