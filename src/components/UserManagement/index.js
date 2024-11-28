import React, { useContext, useState } from "react";
import "./usermanagement.css";
import { PencilSimple, Trash } from "phosphor-react";
import AddUserModal from "../AddModal";
import { AppContext } from "../../context/contex";

const roles={
  1:"Admin",
  2:"Manager",
  3:"User"
}

const UserManagement = () => {
  const { usersList, updateUsersList } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleAddUser = () => {
    setCurrentUser(null);
    setShowModal(true);
  };

  const handleEditUser = (id) => {
    const userToEdit = usersList.find((user) => user.id === id);
    setCurrentUser(userToEdit);
    setShowModal(true);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = usersList.filter((user) => user.id !== id);
    updateUsersList(updatedUsers);
  };

  const handleSaveUser = (data) => {
    const updatedUsers = currentUser
      ? usersList.map((user) =>
          user.id === currentUser.id ? { ...user, ...data } : user
        )
      : [...usersList, { id: usersList.length + 1, ...data }];
    updateUsersList(updatedUsers);
    setShowModal(false);
  };


  return (
    <>
      {usersList.length > 0 ? (
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
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{roles[user.roleId]}</td>
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
