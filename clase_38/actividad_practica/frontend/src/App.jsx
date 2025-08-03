
import PropTypes from "prop-types";
import "./app.scss";
import { users } from "./data/users";

const UserListItem = (props) => {
    const { name, email, age, isActive, isAdmin } = props.user;

    return (
        <div className={`user-item ${isActive ? "user-item--active" : "user-item--inactive"}`}>
            <div className="user-item__header">
                <h4 className="user-item__name">{name}</h4>
                {isAdmin && <p className="user-item__admin">Administrador</p>}
            </div>
            <p className="user-item__email">{email}</p>
            <p className="user-item__age">Edad: {age} años</p>
            <p className="user-item__status">{isActive ? "Activo" : "Inactivo"}</p>
        </div>
    );
};

UserListItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        isActive: PropTypes.bool.isRequired,
        isAdmin: PropTypes.bool.isRequired,
    }).isRequired,
};

const UserList = (props) => {
    const { users } = props;

    return (
        <div className="user-list">
            <div className="user-list__content">
                {users.map((user) => (
                    <UserListItem
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired,
};

const User = () => {
    const getActiveUsers = () => {
        const activeUsers = users.filter((user) => user.isActive);
        return activeUsers.length;
    };

    const getAdminUsers = () => {
        const adminUsers = users.filter((user) => user.isAdmin);
        return adminUsers.length;
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
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <User/>
        </div>
    );
};

export default App;
