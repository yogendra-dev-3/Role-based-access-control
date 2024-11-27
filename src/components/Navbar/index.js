import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./navbar.css";
import { getData } from "../../helper";
import { localStorageKeys } from "../../constants";
import CommonModal from "../common/CommonModal";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation(); // Get the current route
  const isAuthenticated = getData(localStorageKeys.loggedUser);

  const [showlogout, setShowlogout] = useState(false);

  const handleLogout = () => {
    // remove user from localStorage to log out
    localStorage.removeItem(localStorageKeys.loggedUser);
    history.push("/login"); // redirect to login page after logging out
  };

  // Function to check if the current link is active
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">RBAC</div>
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
          <Link
            className={`navbar-link ${isActive("/dashboard/role-management")}`}
            to="/dashboard/role-management"
          >
            Role Management
          </Link>

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
          title="Are you sure want to logout ?"
          content="logut"
          show={showlogout}
          handleClose={() => setShowlogout(false)}
          handlesubmit={handleLogout}
          btnText="logout"
        />
      )}
    </>
  );
};

export default Navbar;
