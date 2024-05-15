import React, { useEffect, useState } from 'react';
import { AppRouter } from './router/AppRouter';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    setIsAuthenticated(!!loggedInUser);
  }, []);

  return <AppRouter isAuthenticated={isAuthenticated} />;
}

export default App;
