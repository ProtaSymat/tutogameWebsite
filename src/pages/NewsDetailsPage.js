import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

const NewsDetailsPage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchArticleDetails();
  }, [articleId]);

  useEffect(() => {
    if (article) {
      fetchAuthorName(article.user_id);
    }
  }, [article]);


    const fetchArticleDetails = async () => {
      const url = `https://tutogame.alwaysdata.net/tutogameAPI/api/article/${articleId}`;
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
        setArticle(data.article);
      } catch (error) {
        setError(error.toString());
      }
    };

    const fetchAuthorName = async (userId) => {
      const url = `https://tutogame.alwaysdata.net/tutogameAPI/api/user/${userId}`;

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
        setAuthor(data.user.username);
      } catch (error) {
        setError(error.toString());
      }
    };

  if (!article) {
    return <div>Chargement...</div>;
  }
  return (
    <div className="article-detail">
      <div className="bannerChapitre position-relative w-100">
        <img className="h-100 w-100 object-fit-cover" src={article.articles_img} alt="Article" />
        <div className="position-absolute" style={{ top: '1.2vw', left: '1.2vw' }}>
          <a className="btn btn-dark" href="/news"><ArrowLeft/> Revenir aux articles</a>
        </div>
      </div>
      <div className="position-absolute w-100" style={{ transform: 'translateY(-50%)' }}>
        <div className="container">
          <div className="bg-primary text-white py-4 px-3">
            <h1>{article.articles_titre}</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5" style={{ paddingTop: '5vw' }}>
        <div>
          <p className="mt-5 text-start">
            écrit par {author}, publié le {
              new Date(article.articles_created).toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
            }
          </p>
          <p className="my-4 text-start">{article.articles_content}</p>
        </div>
      </div>     
    </div>
  );
};

export default NewsDetailsPage;