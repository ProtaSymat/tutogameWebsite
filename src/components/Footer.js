import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logotutogame.png';
import { Instagram, Twitter, Linkedin } from 'react-feather';


function Footer() {
  return (
    <footer className="mt-4 border-top border-black">
      <div className="py-lg-5 px-lg-4 px-3 py-4">
        <div className="row">
          <div className="col-12 col-lg-4">
            <nav className="text-start d-flex justify-content-lg-center justify-content-start">
              <ul className="nav flex-column d-flex">
                <li className="nav-item py-2"><Link to="/chapitres" className="k-suture text-dark text-decoration-none">Nos tutoriels</Link></li>
                <li className="nav-item py-2"><Link to="/pricing" className="k-suture text-dark text-decoration-none">Pricing</Link></li>
                <li className="nav-item py-2"><Link to="/vos-jeux" className="k-suture text-dark text-decoration-none">Les jeux de la commu</Link></li>
                <li className="nav-item py-2"><Link to="/news" className="k-suture text-dark text-decoration-none">News</Link></li>
                <li className="nav-item py-2"><Link to="/compte" className="k-suture text-dark text-decoration-none">Mon compte</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-lg-4 pb-4">
          <nav className="text-start d-flex justify-content-lg-center justify-content-start">
              <ul className="nav flex-column d-flex">
                <li className="nav-item py-2"><Link to="/mentions-legales" className="k-suture text-dark text-decoration-none">Mentions légales</Link></li>
                <li className="nav-item py-2"><Link to="/conditions-generales-de-vente" className="k-suture text-dark text-decoration-none">Conditons générales de vente</Link></li>
                <li className="nav-item py-2"><Link to="/politique-de-confidentialite" className="k-suture text-dark text-decoration-none">Politique de confidentialité</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-lg-4 px-md-5">
            <a href="/" className="mb-3 mb-lg-0 w-100 d-flex justify-content-lg-start justify-content-center">
                <img src={logo} alt="Logo" style={{ maxWidth: '220px', maxHeight: '220px' }} />
            </a>
            <p className="text-start d-flex justify-content-lg-start justify-content-center pt-lg-4 pt-3">Suivez nous</p>
            <div className="text-start d-flex justify-content-lg-start justify-content-center">
            <a href="https://twitter.com/tutogame" className="text-dark">
            <Twitter className="me-3"></Twitter>
            </a>
            <a href="https://instagram.com/tutogame" className="text-dark">
            <Instagram className="me-3"></Instagram>
            </a>
            <a href="https://linkedin.com/in/tutogame" className="text-dark">
            <Linkedin className="me-3"></Linkedin>
            </a>
      </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <p className="k-suture text-dark py-3 mb-0 fs-6">Travail pédagogique sans objectifs commerciaux - © Copyright by Symat</p>
      </div>
    </footer>
  );
}

export default Footer;