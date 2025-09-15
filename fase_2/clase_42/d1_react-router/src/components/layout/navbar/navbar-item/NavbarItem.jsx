import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "./navbar-item.scss";

const NavbarItem = (props) => {
    const { item, isDynamic = false } = props;
    const location = useLocation();

    const getClassName = () => {
        const isActive = isDynamic
            ? location.pathname.startsWith(item.path)
            : location.pathname === item.path;

        return `navbar-item ${isActive ? "navbar-item--active" : ""}`;
    };

    return (
        <li className={getClassName()}>
            <Link to={item.path}>{item.label}</Link>
        </li>
    );
};

NavbarItem.propTypes = {
    item: PropTypes.shape({
        path: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired,
    isDynamic: PropTypes.bool,
};

export default NavbarItem;