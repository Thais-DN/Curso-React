import { useState } from "react";
import Input from "../../components/Input/Input";
import "./Register.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function onEmailHandler(event) {
        setEmail(event.target.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        console.log(email);
    }
    return (
        <>
            <div className="register-container">
                <form className="register-form" onSubmit={onSubmitHandler}>
                    <Input
                        label="Email"
                        placeholder="Digite seu email..."
                        inputValue={email}
                        onChange={onEmailHandler}
                    />
                    <Input
                        label="Senha"
                        placeholder="Digite sua senha..."
                        inputValue={password}
                    />
                    <Input
                        label="Confirmar senha"
                        placeholder="Confirme sua senha..."
                        inputValue={confirmPassword}
                    />
                    <button className="bt-form" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </>
    );
}

export default Register;
