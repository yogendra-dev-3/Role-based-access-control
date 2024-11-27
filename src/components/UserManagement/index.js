import React, { useState } from "react";
import "./usermanagement.css"; // Assuming this CSS file is linked to the component
import ToggleSwitch from "../common/ToggleSwitch";
import { PencilSimple, Trash } from "phosphor-react";
import AddUserModal from "../AddModal";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Robert Brown",
      email: "robert.brown@example.com",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      status: "Inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddUser = () => {
    setShowModal(true);
  };

  const handleEditUser = (userId) => {
    alert(`Edit user with ID: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleToggleStatus = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        user.status = user.status === "Active" ? "Inactive" : "Active";
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleSaveUser=(data)=>{
    console.log(data)
  }

  return (
    <>
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
                  <ToggleSwitch
                    isActive={user.status === "Active"}
                    onChange={() => handleToggleStatus(user.id)}
                  />
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
        {showModal && <AddUserModal show={showModal} handleClose={()=>setShowModal(false)} handleSave={handleSaveUser} />}
      </div>
    </>
  );
};

export default UserManagement;
