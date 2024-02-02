import styles from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
    return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.form}>
                <LoginForm />
            </div>
        </div>
    );
}
