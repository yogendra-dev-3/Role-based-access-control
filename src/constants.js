export const localStorageKeys = {
    registeredUsers: "registeredUsers",
    loggedUser: "loggedUser",
    allProducts: "allProducts",
    usersList:"usersList",
    rolesList:"rolesList"
  };

  export const adminDetails={
    username:"admin",
    passowrd:"admin@2024"
  }

  export const defaultRolesData = [
    {
      id: 1,
      name: "Admin",
      permissions: { read: true, write: true, delete: true },
    },
    {
      id: 2,
      name: "Manager",
      permissions: { read: true, write: true, delete: false },
    },
    {
      id: 3,
      name: "User",
      permissions: { read: true, write: false, delete: false },
    },
  ];