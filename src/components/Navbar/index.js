import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./navbar.css";
import { getData } from "../../helper";
import { localStorageKeys, adminDetails } from "../../constants";
import CommonModal from "../common/CommonModal";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const isAuthenticated = getData(localStorageKeys.loggedUser);
  
  const [showlogout, setShowlogout] = useState(false);
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const user = JSON.parse(localStorage.getItem(localStorageKeys.loggedUser));
      const { username, password } = user;
      if (username === adminDetails.username && password === adminDetails.password) {
        setIsAdminUser(true);
      } else {
        setIsAdminUser(false);
      }
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem(localStorageKeys.loggedUser);
    history.push("/login");
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo" onClick={()=>history.push("/dashboard/home")}>RBAC</div>
        <div className="navbar-links">
          <Link
            className={`navbar-link ${isActive("/dashboard/home")}`}
            to="/dashboard/home"
          >
            Home
          </Link>
          <Link
            className={`navbar-link ${isActive("/dashboard/user-management")}`}
            to="/dashboard/user-management"
          >
            User Management
          </Link>
          
          {isAdminUser && (
            <Link
              className={`navbar-link ${isActive("/dashboard/role-management")}`}
              to="/dashboard/role-management"
            >
              Role Management
            </Link>
          )}

          {isAuthenticated ? (
            <button
              className="navbar-link logout-btn"
              onClick={() => setShowlogout(true)}
            >
              Logout
            </button>
          ) : (
            <Link className="navbar-link login-btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </nav>

      {showlogout && (
        <CommonModal
          title="Logout"
          content="Are you sure you want to logout?"
          show={showlogout}
          handleClose={() => setShowlogout(false)}
          handleSubmit={handleLogout}
          btnText="Logout"
        />
      )}
    </>
  );
};

export default Navbar;
