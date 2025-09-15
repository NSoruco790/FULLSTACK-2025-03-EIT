import NavbarItem from "./navbar-item/NavbarItem";
import { items } from "./navbar.config";
import "./navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                {items.map((item) => (
                    <NavbarItem
                        key={item.path}
                        item={item}
                        isDynamic={item.isDynamic}/>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;