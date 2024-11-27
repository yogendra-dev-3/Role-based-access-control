import React, { useEffect, useState } from "react";
import "./usermanagement.css";
import { PencilSimple, Trash } from "phosphor-react";
import AddUserModal from "../AddModal";
import { localStorageKeys } from "../../constants";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const usersList =
      JSON.parse(localStorage.getItem(localStorageKeys.usersList)) || [];
    setUsers(usersList);
  }, []);

  const handleAddUser = () => {
    setUserId(null); // Reset userId for adding a new user
    setCurrentUser(null); // No current user data
    setShowModal(true);
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setUserId(id);
    setCurrentUser(userToEdit);
    setShowModal(true);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem(
      localStorageKeys.usersList,
      JSON.stringify(updatedUsers)
    );
  };

  const handleSaveUser = (data) => {
    let updatedUsers;
    if (userId) {
        // Edit user
        updatedUsers = users.map((user) =>
            user.id === userId ? { ...user, ...data } : user
        );
    } else {
        const newUser = {
            id: users.length + 1,
            ...data,
            roleId: data.roleId,
        };
        updatedUsers = [...users, newUser];
    }
    setUsers(updatedUsers);
    localStorage.setItem(localStorageKeys.usersList, JSON.stringify(updatedUsers));
    setShowModal(false);
};


  return (
    <>
      {users.length > 0 ? (
        <div className="user-management-container">
          <div className="header">
            <h1 className="user-management-title">User Management</h1>
            <button className="add-user-btn" onClick={handleAddUser}>
              Add User
            </button>
          </div>

          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span
                      className={`status ${
                        user.status ? "active" : "inactive"
                      }`}
                    >
                      {user.status ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>
                    <div className="user-action-btns">
                      <button
                        className="user-action-btn edit-btn"
                        onClick={() => handleEditUser(user.id)}
                      >
                        <PencilSimple size={20} color="#f8f7f7" />
                      </button>
                      <button
                        className="user-action-btn delete-btn"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <Trash size={20} color="#f8f7f7" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-screen">
          <h2>No Users Available</h2>
          <p>
            It seems there are no users at the moment. You can add new users
            below.
          </p>
          <button
            type="button"
            className="add-user-btn"
            onClick={handleAddUser}
          >
            Add User
          </button>
        </div>
      )}
      {showModal && (
        <AddUserModal
          user={currentUser}
          show={showModal}
          handleClose={() => setShowModal(false)}
          handleSave={handleSaveUser}
        />
      )}
    </>
  );
};

export default UserManagement;
