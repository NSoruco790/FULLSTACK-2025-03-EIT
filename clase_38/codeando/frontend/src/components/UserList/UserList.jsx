import PropTypes from "prop-types";
import React from "react";
import UserListItem from "../UserListItem/UserListItem";
import "./UserList.scss";

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

UserList.defaultProps = {
    users: [],
};

export default UserList;
