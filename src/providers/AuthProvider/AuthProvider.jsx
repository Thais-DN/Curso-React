import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import authContext from "../../context/authContext";

export default function AuthProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(function () {
        const isAuthenticated = JSON.parse(
            localStorage.getItem("isAuthenticated")
        );
        setIsAuthenticated(isAuthenticated);
    }, []);

    return (
        <authContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {props.children}
        </authContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
