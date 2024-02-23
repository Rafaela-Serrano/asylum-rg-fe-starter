import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}
        >
          <img src={user.picture} alt={user.name} />
        </div>

        <h2
          style={{
            fontFamily: 'monospace',
            fontSize: '2rem',
            textAlign: 'center',
          }}
        >
          Welcome Rafaela Serrano-Plata.
        </h2>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '2rem',
            textAlign: 'center',
          }}
        >
          Email:{user.email}
        </p>
      </div>
    )
  );
};

export default Profile;
