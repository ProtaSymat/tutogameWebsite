import React, { useEffect, useState } from 'react';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const url = "https://tutogame.alwaysdata.net/tutogameAPI/api/users";

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
      setUsers(data.users);
    } catch (error) {
      setError(error.toString());
      console.error('Error:', error);
    }
  };

  if (error) {
    return <div>Erreur lors de la récupération des users: {error}</div>;
  }


  return (
    <div className="mt-5 container">
      <div className="text-start border-bottom border-primary pb-3">
        <h1 className="k-suture fs-3">Utilisateurs</h1>
      </div>
      <section className="pt-3 d-flex justify-content-center">
        {users.length > 0 ? (
          <div className="w-100">
            {users.map((user, index) => (
              <div key={index} className="bg-primary mb-3">
                <div className="p-3">
                  <div className="text-white text-start d-flex flex-row align-items-center">
                    <h2 className="fs-4 me-5 mb-0">{user.username}</h2>
                    <p className="fs-6 me-3 mb-0">{user.email}</p>
                    <p className="fs-6 d-flex ms-auto">{user.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Aucun user trouvé</div>
        )}
      </section>
    </div>
  );
};

export default ViewUsers;
