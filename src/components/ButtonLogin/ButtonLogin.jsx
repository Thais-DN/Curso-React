import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonLogin.css";

export default function ButtonLogin() {
    const [showButtons, setShowButtons] = useState(true);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <div>
            {showButtons && (
                <div className="buttons">
                    <button className="logar" onClick={handleLogin}>
                        Fazer Login
                    </button>
                    <button
                        className="noLogar"
                        onClick={() => setShowButtons(false)}
                    >
                        Não Fazer Login
                    </button>
                </div>
            )}
        </div>
    );
}
