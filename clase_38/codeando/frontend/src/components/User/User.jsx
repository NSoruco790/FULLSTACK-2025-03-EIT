import React from "react";
import { users } from "../../data/users";
import UserList from "../UserList/UserList";
import "./User.scss";

const User = () => {
    const getActiveUsers = () => {
        const activeUsers = users.filter((user) => user.isActive);
        return activeUsers.length;
    };

    const getAdminUsers = () => {
        const adminUsers = users.filter((user) => user.isAdmin);
        return adminUsers.length;
    };

    const showAlert = () => {
        alert("Gestión de Usuarios");
    };

    return (
        <div className="user">
            <h2 className="user__title">Gestión de Usuarios</h2>

            <div className="user__stats">
                <p>Total de usuarios: {users.length}</p>
                <p>Usuarios activos: {getActiveUsers()}</p>
                <p>Usuarios administradores: {getAdminUsers()}</p>
            </div>

            <UserList users={users}/>

            <button onClick={showAlert}>Mostrar Alerta</button>
        </div>
    );
};

export default User;
