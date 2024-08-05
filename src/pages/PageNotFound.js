import React from 'react';
import { Helmet } from 'react-helmet';


function PageNotFound() {
  return (
    <div className="mt-5">
        <Helmet>
        <title>404 - Tutogame</title>
        <meta name="description" content="erreur" />
      </Helmet>
        <div className="container py-5">
            <div className="pb-4">
                <h1>Erreur 404</h1>
                <p>Il n'y a pas de contenu sur cette page !</p>
                <a className="mt-3 btn btn-primary text-white" type="submit">Revenir sur la page d'accueil</a>
            </div>
        </div>
    </div>
  );
}

export default PageNotFound;