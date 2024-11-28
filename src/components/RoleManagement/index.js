import React, { useContext, useEffect, useState } from "react";
import { PencilSimple } from "phosphor-react";
import RoleEditModal from "../RoleEditModal";
import "./rolemanagement.css"; // Assuming custom styling file
import { AppContext } from "../../context/contex";


const RoleManagement = () => {
  const { rolesList, updateRolesList } =useContext(AppContext);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSave = (updatedPermissions) => {
    const updatedRoles = rolesList.map((role) =>
      role.id === selectedRole.id
        ? { ...role, permissions: updatedPermissions }
        : role
    );
    updateRolesList(updatedRoles);
    setShowEditModal(false);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setShowEditModal(true);
  };

  return (
    <>
      <div className="role-management-container">
        <div className="role-management__header">
          <h1 className="role-management__title">Role Management</h1>
        </div>
        <div className="role-management__table-container">
          <table className="role-management__table">
            <thead>
              <tr>
                <th>Role Name</th>
                <th>Read Access</th>
                <th>Write Access</th>
                <th>Delete Access</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rolesList.map((role) => (
                <tr key={role.id}>
                  <td>{role.name}</td>
                  <td>{role.permissions.read ? "Yes" : "No"}</td>
                  <td>{role.permissions.write ? "Yes" : "No"}</td>
                  <td>{role.permissions.delete ? "Yes" : "No"}</td>
                  <td>
                    <div className="user-action-btns">
                      <button
                        className="user-action-btn edit-btn"
                        onClick={() => handleEditRole(role)}
                      >
                        <PencilSimple size={20} color="#f8f7f7" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showEditModal && (
        <RoleEditModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          handleSave={handleSave}
          permissions={selectedRole.permissions}
          roleName={selectedRole.name}
        />
      )}
    </>
  );
};

export default RoleManagement;
