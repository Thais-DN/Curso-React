import "./Header.css";
import PropTypes from "prop-types";

function Header(props) {
    const hideMenu = props.hideMenu;
    return (
        <header className="header">
            {hideMenu ? null : (
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
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
