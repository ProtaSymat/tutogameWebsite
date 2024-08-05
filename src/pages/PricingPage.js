import React from 'react';
import { User, Home, CheckCircle, X } from 'react-feather';
import { Helmet } from 'react-helmet';


function PricingPage() {
  return (
    <div className="mt-5">
        <Helmet>
        <title>Pricing - Tutogame</title>
        <meta name="description" content="Pricing" />
      </Helmet>
        <div className="container">
            <div className="pb-4 text-start">
                <h1>Pricing Plan</h1>
                <p>Choisissez l'offre qui vous convient le mieux et commencez votre aventure avec TutoGame. Nous proposons deux types d'abonnement : Free et Team. Comparez les avantages et sélectionnez celui qui répond le mieux à vos besoins.</p>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12 vh-50 mb-lg-0 mb-3">
                    <div className="bg-gray p-4 h-100 d-flex flex-column">
                        <div className="d-flex flex-row align-items-center ">
                            <User className="me-4"></User>
                            <div className="d-flex flex-column text-start">
                                <h2 className="fs-4">Free - Utilisateur Mode</h2>
                                <p className="mb-0">Découvrez les bases du développement de jeux avec notre offre gratuite.</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-5">
                        <CheckCircle className="me-4 text-success"></CheckCircle>
                        <p>Accéder à un nombre illimité de tutoriels</p>
                        </div>
                        <div className="d-flex flex-row mt-2">
                        <CheckCircle className="me-4 text-success"></CheckCircle>
                        <p>Voir sa progression sur les tutoriels</p>
                        </div>
                        <div className="d-flex flex-row mt-2">
                        <CheckCircle className="me-4 text-success"></CheckCircle>
                        <p>Possibilité de jouer les jeux des autres utilisateurs</p>
                        </div>
                        <div className="d-flex flex-row mt-2">
                        <CheckCircle className="me-4 text-success"></CheckCircle>
                        <p>Acces à tous les niveaux et catégories de chapitres</p>
                        </div>
                        <div className="d-flex flex-row mt-2">
                        <X className="me-4 text-danger"></X>
                        <p>Mettre les tutoriels en favori</p>
                        </div>
                        <div className="d-flex flex-row mt-2 mb-5">
                        <X className="me-4 text-danger"></X>
                        <p>Publier ses propres jeux sur la plateforme</p>
                        </div>
                        <div className="d-flex justify-content-center mt-auto"><a className="btn btn-dark" href="/login">En savoir plus</a></div>

                    </div>
                </div>
                <div className="col-lg-6 col-12 text-white vh-50">
                    <div className="bg-primary p-4 h-100 d-flex flex-column">
                        <div className="d-flex flex-row align-items-center ">
                            <Home className="me-4"></Home>
                            <div className="d-flex flex-column text-start">
                                <h2 className="fs-4">Team - Entreprise Mode</h2>
                                <p className="mb-0">Profitez de tous les avantages pour une expérience complète et collaborative.</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-5">
                            <CheckCircle className="me-4 text-success"></CheckCircle>
                            <p>Accéder à un nombre illimité de tutoriels</p>
                        </div>
                        <div className="d-flex flex-row mt-2">
                            <CheckCircle className="me-4 text-success"></CheckCircle>
                            <p>Voir sa progression sur les tutoriels</p>
                        </div>
                        <div className="d-flex flex-row mt-2">
                            <CheckCircle className="me-4 text-success"></CheckCircle>
                            <p>Possibilité de jouer les jeux des autres utilisateurs</p>
                        </div>
                        <div className="d-flex flex-row mt-2">
                            <CheckCircle className="me-4 text-success"></CheckCircle>
                            <p>Acces à tous les niveaux et catégories de chapitres</p>
                        </div>
                        <div className="d-flex flex-row mt-2">
                            <CheckCircle className="me-4 text-success"></CheckCircle>
                            <p>Mettre les tutoriels en favori</p>
                        </div>
                        <div className="d-flex flex-row mt-2 mb-5">
                            <CheckCircle className="me-4 text-success"></CheckCircle>
                            <p>Publier ses propres jeux sur la plateforme</p>
                        </div>
                        <div className="d-flex justify-content-center mt-auto"><a className="btn btn-dark">En savoir plus</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PricingPage;