import React, { useState } from "react";
import "./home.css";  // Assuming custom styling file

const Home = () => {
    // Mock current user and their role
    const [user] = useState({
        name: "John Doe",
        role: "Admin",
        permissions: {
            read: true,
            write: true,
            delete: true
        }
    });

    return (
        <div className="home-container">
            <div className="home-header">
                <h1 className="home-title">Welcome, {user.name}</h1>
                <p className="user-role">Your current role: <strong>{user.role}</strong></p>
            </div>

            <div className="role-permissions-container">
                <h2 className="permissions-title">Your Role Permissions</h2>
                <table className="permissions-table">
                    <thead>
                        <tr>
                            <th>Permission</th>
                            <th>Access</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Read Access</td>
                            <td>{user.permissions.read ? "Granted" : "Denied"}</td>
                        </tr>
                        <tr>
                            <td>Write Access</td>
                            <td>{user.permissions.write ? "Granted" : "Denied"}</td>
                        </tr>
                        <tr>
                            <td>Delete Access</td>
                            <td>{user.permissions.delete ? "Granted" : "Denied"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="action-buttons">
                <button className="update-btn">Update Permissions</button>
            </div>
        </div>
    );
};

export default Home;
