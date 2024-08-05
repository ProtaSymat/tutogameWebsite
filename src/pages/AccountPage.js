import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, List, LogOut, BarChart2,Settings } from 'react-feather';
import { Helmet } from 'react-helmet';
import Dashboard from '../components/account/Dashboard';
import AccountDetails from '../components/account/AccountDetails';
import Statistics from '../components/account/Statistics';
import AdminInterface from '../components/account/AdminInterface';

function AccountPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const userData = JSON.parse(localStorage.getItem('userData'));
  const username = userData?.username || 'Utilisateur';
  const userRole = userData?.role || 'USER';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const changeComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'accountDetails':
        return <AccountDetails />;
      case 'statistics':
        return <Statistics />;
      case 'adminInterface':
        return <AdminInterface />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="mt-5">
            <Helmet>
        <title>Mon Compte - Tutogame</title>
        <meta name="description" content="Compte" />
      </Helmet>
      <div className="container">
        <div className="text-start border-bottom border-primary mb-4">
          <h1 className="k-suture">Mon compte</h1>
        </div>
      </div>
      <div className="container">
      <div className="d-flex row">
        <div className="col-12 col-lg-4 vh-lg-50 mb-lg-0 mb-4">
          <div className="bg-primary text-white text-start h-100 p-5 k-suture h-100">
            <div className="menu-item py-4 fs-3" style={{cursor:'pointer'}} onClick={() => changeComponent('dashboard')}>
              <List className="me-3"/> Dashboard
            </div>
            <div className="menu-item py-4 fs-3" style={{cursor:'pointer'}} onClick={() => changeComponent('accountDetails')}>
              <User className="me-3"/> Détail du compte
            </div>
            <div className="menu-item py-4 fs-3" style={{cursor:'pointer'}} onClick={() => changeComponent('statistics')}>
              <BarChart2 className="me-3"/> Statistiques
            </div>
            {userRole === 'ADMIN' && (
              <div className="menu-item py-4 fs-3" style={{cursor:'pointer'}} onClick={() => changeComponent('adminInterface')}>
                <Settings className="me-3"/> Interface Admin
              </div>
            )}
            <div className="menu-item py-4 fs-3" style={{cursor:'pointer'}} onClick={handleLogout}>
              <LogOut className="me-3"/> Se déconnecter
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12 vh-lg-50">
          <div className="border border-primary h-100 p-4">
          {renderComponent()}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AccountPage;