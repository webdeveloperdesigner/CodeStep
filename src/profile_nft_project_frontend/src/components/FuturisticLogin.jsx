import React, { useState, useEffect } from "react";
import { initAuth, logout } from "../auth/auth";
import "./FuturisticLogin.scss";

const FuturisticLogin = () => {
  const [authClient, setAuthClient] = useState(null);
  const [principal, setPrincipal] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const client = await initAuth();
      setAuthClient(client);

      if (client.isAuthenticated()) {
        const identity = client.getIdentity();
        setPrincipal(identity.getPrincipal().toText());
      }
    };

    checkLogin();
  }, []);

  return (
    <div className="futuristic-login-container">
      {principal ? (
        <div className="welcome-box">
          <h2>Welcome!</h2>
          <p>
            <strong>Principal ID:</strong> {principal}
          </p>
          <button className="logout-btn" onClick={() => logout(authClient)}>
            Logout
          </button>
        </div>
      ) : (
        <button className="login-btn" onClick={() => initAuth()}>
          Login with Internet Identity
        </button>
      )}
    </div>
  );
};

export default FuturisticLogin;
