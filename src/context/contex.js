import React, { createContext, useState, useEffect } from "react";
import { localStorageKeys } from "../constants";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);
  const [rolesList, setRolesList] = useState([]);

  useEffect(() => {
    const savedUsersList =
      JSON.parse(localStorage.getItem(localStorageKeys.usersList)) || [];
    const savedRolesList =
      JSON.parse(localStorage.getItem(localStorageKeys.rolesList)) || [];
    setUsersList(savedUsersList);
    setRolesList(savedRolesList);
  }, []);

  const updateUsersList = (list) => {
    setUsersList(list);
    localStorage.setItem(localStorageKeys.usersList, JSON.stringify(list));
  };

  const updateRolesList = (list) => {
    setRolesList(list);
    localStorage.setItem(localStorageKeys.rolesList, JSON.stringify(list));
  };

  return (
    <AppContext.Provider value={{ usersList, rolesList, updateUsersList, updateRolesList }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
