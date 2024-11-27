import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home";
import UserManagement from "../UserManagement";
import RoleManagement from "../RoleManagement";
import { adminDetails, localStorageKeys } from "../../constants";

const Dashboard = () => {
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(localStorageKeys.loggedUser));
    const { username, password } = user;
    if (username === adminDetails.username && password === adminDetails.password) {
      setIsAdminUser(true);
    } else {
      setIsAdminUser(false);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        <Switch>
          <Route path="/dashboard/home" component={Home} />
          <Route path="/dashboard/user-management" component={UserManagement} />
          {isAdminUser ? (
            <Route path="/dashboard/role-management" component={RoleManagement} />
          ) : (
            <Redirect to="/dashboard/home" />
          )}
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
