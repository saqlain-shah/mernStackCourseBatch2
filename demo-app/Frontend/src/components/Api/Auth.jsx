import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthChecker = () => {
  const [isAuthenticated, setIsAuthenticated] = useState('');

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/checkauthentication')
        .then((response)=>{
            setIsAuthenticated(response);
            console.log("Response",response.data)
        })
      
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthentication();
  }, []);



  return (
    <div>
      {isAuthenticated === '' ? (
        <h1>User is Not authenticated!</h1>
      ) : (
        <h1>{isAuthenticated}</h1>
      )}
    </div>
  );
};

export default AuthChecker;
