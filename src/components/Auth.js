import React from 'react';
import { useAuth } from './AuthContext';

export default function Auth() {
  const { isAuthenticated, toggleAuth } = useAuth();

  const handleCheckboxChange = (e) => {
    toggleAuth(e.target.checked);
  };

  return (
    <div>
      <h2>Click on the checkbox to get authenticated</h2>

      <div>
        <label className="">
          <input
            type="checkbox"
            checked={isAuthenticated}
            onChange={handleCheckboxChange}
          />
          I'm not a robot
        </label>
      </div>

      {/* Conditional Rendering based on authentication status */}
      <div className="authText">
        {isAuthenticated ? (
          <p>You are authenticated, you can proceed</p>
        ) : (
          <p>You are not authenticated</p>
        )}
      </div>
    </div>
  );
}
