import { useContext, useState } from "react";
import "./LoginForm.css";
import authContext from "../../context/authContext";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Context = useContext(authContext);
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

    function onSubmitHandler(event) {
        event.preventDefault();
        if (isInputValid()) {
            console.log("Seu email:", email, "e sua senha, foram capturados!");
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
