import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import { localStorageKeys, adminDetails } from "../../constants"; // Assuming this is where you have constants

const Home = () => {
  const [user, setUser] = useState(null);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const loggedUser = localStorage.getItem(localStorageKeys.loggedUser);
    if (loggedUser) {
      const userData = JSON.parse(loggedUser);
      setUser(userData);

      if (
        userData.username === adminDetails.username &&
        userData.password === adminDetails.password
      ) {
        setIsAdminUser(true);
      } else {
        setIsAdminUser(false);
      }
    }
  }, []);

  const handleUpdatePermissions = () => {
    history.push("/dashboard/role-management");
  };

  if (!user) {
    return <p className="error-message">No user is currently logged in.</p>;
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Welcome, {user.username}</h1>
        <p className="user-role">
          Your current role: <strong>{user.role}</strong>
        </p>
      </div>

      <div className="role-permissions-container">
        <h2 className="permissions-title">Your Role Permissions</h2>
        <table className="permissions-table">
          <thead>
            <tr>
              <th>Permission</th>
              <th>Access</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Read Access</td>
              <td>{user.permissions.read ? "Granted" : "Denied"}</td>
            </tr>
            <tr>
              <td>Write Access</td>
              <td>{user.permissions.write ? "Granted" : "Denied"}</td>
            </tr>
            <tr>
              <td>Delete Access</td>
              <td>{user.permissions.delete ? "Granted" : "Denied"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {isAdminUser && (
        <div className="action-buttons">
          <button onClick={handleUpdatePermissions} className="update-btn">
            Update Permissions
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
