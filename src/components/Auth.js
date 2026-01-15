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
        <label>
          <input
            type="checkbox"
            checked={isAuthenticated}
            onChange={handleCheckboxChange}
          />
          I'm not a robot
        </label>
      </div>

      {/* Conditional Rendering based on authentication status */}
      <div>
        {isAuthenticated ? (
          <div>You are authenticated, you can proceed</div>
        ) : (
          <div>You are not authenticated</div>
        )}
      </div>
    </div>
  );
}
