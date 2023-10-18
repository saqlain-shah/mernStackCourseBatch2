import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthChecker = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {

    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/checkauthentication', {
          withCredentials: true,
        });

        setIsAuthenticated(response.data.isAuthenticated);

      } catch (error) {
        setIsAuthenticated(null);
      }
    };

    checkAuthentication();
  }, []);



  return (
    <div>
      {isAuthenticated != null ? (
        <h1>User is authenticated</h1>
      ) : (
        <h1>User is Not authenticated!</h1>
      )}
    </div>
  );
};

export default AuthChecker;