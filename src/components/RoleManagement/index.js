import React, { useState } from "react";
import "./rolemanagement.css";  // Assuming custom styling file

const RoleManagement = () => {
    const [roles, setRoles] = useState([
        { id: 1, name: "Admin", permissions: { read: true, write: true, delete: true }, customAttributes: "Full Access" },
        { id: 2, name: "Manager", permissions: { read: true, write: true, delete: false }, customAttributes: "Limited Access" },
        { id: 3, name: "User", permissions: { read: true, write: false, delete: false }, customAttributes: "Read-only" },
    ]);

    const handleDeleteRole = (id) => {
        setRoles(roles.filter(role => role.id !== id));
    };

    return (
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
                    <th>Custom Attributes</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {roles.map(role => (
                    <tr key={role.id}>
                        <td>{role.name}</td>
                        <td>{role.permissions.read ? "Yes" : "No"}</td>
                        <td>{role.permissions.write ? "Yes" : "No"}</td>
                        <td>{role.permissions.delete ? "Yes" : "No"}</td>
                        <td>{role.customAttributes}</td>
                        <td>
                            <button className="role-management-btn role-management-btn-edit">Edit</button>
                            <button className="role-management-btn" onClick={() => handleDeleteRole(role.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

    );
};

export default RoleManagement;
