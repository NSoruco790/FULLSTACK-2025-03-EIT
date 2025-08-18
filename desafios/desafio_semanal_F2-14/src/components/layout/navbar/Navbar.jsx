import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Inicio" },
        { path: "/tasks", label: "Tareas" },
    ];

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <div className="navbar">
            <ul className="navbar__menu">
                {navItems.map((item) => (
                    <li key={item.path} className={`navbar__item ${isActive(item.path) ? "navbar__item--active" : ""}`}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;