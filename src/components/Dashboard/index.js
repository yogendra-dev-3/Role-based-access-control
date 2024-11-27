import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home";
import UserManagement from "../UserManagement";
import RoleManagement from "../RoleManagement";

const Dashboard = () => {

  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        <Switch>
          <Route path="/dashboard/home" component={Home} />
          <Route path="/dashboard/user-management" component={UserManagement} />
          <Route path="/dashboard/role-management" component={RoleManagement} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
