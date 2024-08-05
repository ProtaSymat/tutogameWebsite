import React, { useState } from 'react';
import logo from '../img/logotutogame.png';
import { NavLink, Link } from 'react-router-dom';
import { User, X } from 'react-feather';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('token');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavLinkClass = ({ isActive }) => 
    isActive ? "nav-link k-suture text-dark active" : "nav-link k-suture text-dark";

  return (
    <header>
      <div className="px-4 py-3">
        <div className="row align-items-center">
        <a className="col-auto bg-transparent d-lg-none border-white text-dark text-decoration-none" onClick={toggleMenu}>
            ☰
          </a>
          <div className="col d-flex justify-content-center">
            <a href="/" className="mb-3 mb-lg-0">
              <img src={logo} alt="Logo" style={{ maxWidth: '180px', maxHeight: '180px' }} />
            </a>
          </div>
          <div className="col-auto">
            <a href={isLoggedIn ? "/compte" : "/login"} className="d-flex flex-row text-dark text-decoration-none">
            <User className="me-2" />
            <span className="link-dark k-suture align-items-center d-lg-flex d-none">
              {isLoggedIn ? "Mon compte" : "Connexion"}
            </span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-top border-bottom border-black bg-white">
        <div className="px-4 d-flex justify-content-between align-items-center">
          <nav className="d-none d-lg-flex justify-content-start">
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/chapitres" className={getNavLinkClass} style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}>
                  Nos tutos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/news" className={getNavLinkClass} style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}>
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/vos-jeux" className={getNavLinkClass} style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}>
                  Vos jeux
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={getNavLinkClass} style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <nav className="d-none d-lg-flex">
            <div className="nav" href="/pricing">
              <div className="nav-item">
                <Link to="/pricing" className="nav-link k-suture text-white bg-primary">Pricing</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {isOpen && (
        <aside className="position-fixed top-0 end-0 bg-secondary vh-100 vw-100 border border-secondary flex-column d-flex d-lg-none" style={{zIndex: '1000'}}>
          <a className="p-2 ms-3 bg-transparent text-white text-start" onClick={toggleMenu}><X/></a>
          <nav className="nav flex-column text-start text-white p-3">
            <Link to="/chapitres" className="nav-link text-white k-suture fs-2">Nos tutoriels</Link>
            <Link to="/news" className="nav-link text-white k-suture fs-2">News</Link>
            <Link to="/vos-jeux" className="nav-link text-white k-suture fs-2">Vos jeux</Link>
            <Link to="/contact" className="nav-link text-white k-suture fs-2">Contact</Link>
            <Link to="/pricing" className="nav-link text-white k-suture fs-2">Pricing</Link>
            {isLoggedIn ? (
              <Link to="/compte" className="nav-link text-white k-suture fs-2">Mon compte</Link>
            ) : (
              <Link to="/login" className="nav-link text-white k-suture fs-2">Connexion</Link>
            )}
            <Link to="/mentions-legales" className="nav-link text-white k-suture fs-2">Mentions légales</Link>
            <Link to="/conditions-generales-de-vente" className="nav-link text-white k-suture fs-2">Conditons générales de vente</Link>
            <Link to="/politique-de-confidentialite" className="nav-link text-white k-suture fs-2">Politique de confidentialité</Link>
          </nav>
        </aside>
      )}
    </header>
  );
}

export default Header;
