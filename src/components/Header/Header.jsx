import { Link } from "react-router-dom";
import "./Header.css";
import PropTypes from "prop-types";

function Header(props) {
    const hideMenu = props.hideMenu;
    return (
        <header className="header">
            {hideMenu ? null : (
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            )}
            {props.name}
        </header>
    );
}

Header.PropTypes = {
    hideMenu: PropTypes.bool,
    name: PropTypes.string,
};

export default Header;
