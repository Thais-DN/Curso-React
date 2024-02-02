import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../../context/authContext";
import "./LoginForm.css";
import httpClient from "../../axios";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthenticated, setIsAuthenticated } = useContext(authContext);
    const context = isAuthenticated;
    localStorage.setItem("isAuthenticated", true);
    const navigate = useNavigate();
    const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    function onEmailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function onPasswordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function isInputValid() {
        if (!email || !password) return false;
        if (!regex.test(email)) return false;
        return true;
    }

    async function onSubmitHandler(event) {
        event.preventDefault();
        if (isInputValid()) {
            const response = await httpClient.post("/auth/login", {
                email,
                password,
            });
            localStorage.setItem("token", response.data.token);
            setIsAuthenticated(true);
            navigate("/");
        } else {
            console.log("Campos inválidos");
        }
    }

    return (
        <form className="container" onSubmit={onSubmitHandler}>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                    className="input"
                    type="text"
                    id="email"
                    placeholder="Email"
                    onChange={onEmailChangeHandler}
                />
            </div>
            <div className="input-container">
                <label htmlFor="password">Senha</label>
                <input
                    className="input"
                    type="password"
                    placeholder="Senha"
                    onChange={onPasswordChangeHandler}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
