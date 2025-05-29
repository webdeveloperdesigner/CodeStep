import React, { useState, useEffect } from 'react';
import { initAuth, getPrincipalId } from '../auth/auth';

const Login = () => {
  const [principal, setPrincipal] = useState(null);

  useEffect(() => {
    getPrincipalId().then(setPrincipal);
  }, []);

  return (
    <div>
      {principal ? (
        <p>Logged in as: {principal}</p>
      ) : (
        <button onClick={initAuth}>Login with Internet Identity</button>
      )}
    </div>
  );
};

export default Login;
