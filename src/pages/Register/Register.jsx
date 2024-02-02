import { useState } from "react";
import Input from "../../components/Input/Input";
import "./Register.css";
import httpClient from "../../axios";

function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function onEmailHandler(event) {
        setEmail(event.target.value);
    }
    function onPasswordHandler(event) {
        setPassword(event.target.value);
    }
    function onConfirmPasswordHandler(event) {
        setConfirmPassword(event.target.value);
    }

    function onNameHandler(event) {
        setName(event.target.value);
    }

    async function onSubmitHandler(event) {
        event.preventDefault();
        try {
            const response = await httpClient.post("/auth/register", {
                name,
                email,
                password,
            });
            console.log(response);
            alert("Usuário cadastrado com sucesso");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="register-container">
                <form className="register-form" onSubmit={onSubmitHandler}>
                    <Input
                        label="Name"
                        placeholder="Digite seu nome..."
                        inputValue={name}
                        onChange={onNameHandler}
                    />
                    <Input
                        label="Email"
                        placeholder="Digite seu email..."
                        inputValue={email}
                        onChange={onEmailHandler}
                    />
                    <Input
                        type="password"
                        label="Senha"
                        placeholder="Digite sua senha..."
                        inputValue={password}
                        onChange={onPasswordHandler}
                    />
                    <Input
                        type="password"
                        label="Confirmar senha"
                        placeholder="Digite novamente a sua senha..."
                        inputValue={confirmPassword}
                        onChange={onConfirmPasswordHandler}
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
