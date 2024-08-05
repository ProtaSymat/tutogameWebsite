import React, { useState } from 'react';
import ViewUsers from '../admin/ViewUsers';
import ViewTutoriels from '../admin/ViewTutoriels';
import AddArticles from '../admin/AddArticles';
import Dashboard from './Dashboard';

function AdminInterface() {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const changeComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="h-100 px-4 pb-5">
      <div className="d-flex flex-row text-center justify-content-center border-bottom border-black pb-2">
        <a className="pe-3 text-primary text-decoration-none" type="button" onClick={() => changeComponent('ViewUsers')}>
          Voir les utilisateurs
        </a>
        <a className="pe-3 text-primary text-decoration-none" type="button" onClick={() => changeComponent('addArticles')}>
          Écrire un article
        </a>
        <a className="text-primary text-decoration-none" type="button" onClick={() => changeComponent('ViewTutoriels')}>
          Voir les cours
        </a>
      </div>
      {activeComponent === ''}
      {activeComponent === 'ViewUsers' && <ViewUsers />}
      {activeComponent === 'ViewTutoriels' && <ViewTutoriels />}
      {activeComponent === 'addArticles' && <AddArticles />}

    </div>
  );
}

export default AdminInterface;