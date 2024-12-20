import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; 

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext); 
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUser(null); 
    navigate('/login');  
  }, [setCurrentUser, navigate]); 

  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
