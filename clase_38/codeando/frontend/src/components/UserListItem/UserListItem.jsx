import PropTypes from "prop-types";
import React from "react";
import "./UserListItem.scss";

const UserListItem = (props) => {
    const { name, email, age, isActive, isAdmin } = props.user;

    return (
        <div className={`user-item ${isActive ? "user-item--active" : "user-item--inactive"}`}>
            <h4 className="user-item__name">{name}</h4>
            <p className="user-item__email">{email}</p>
            <p className="user-item__age">Edad: {age} años</p>
            <p className="user-item__status">{isActive ? "Activo" : "Inactivo"}</p>
            {isAdmin && <p className="user-item__admin">Administrador</p>}
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

UserListItem.defaultProps = {
    user: {
        id: 0,
        name: "",
        email: "",
        age: 0,
        isActive: false,
        isAdmin: false,
    },
};

export default UserListItem;
