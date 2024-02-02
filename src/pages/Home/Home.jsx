import { useContext, useState } from "react";
import styles from "./Home.module.css";
import authContext from "../../context/authContext";
import { useSearchParams } from "react-router-dom";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin";

function Home() {
    const [showTimer, setShowTimer] = useState(true);
    const [searchParams] = useSearchParams();
    const { isAuthenticated } = useContext(authContext);

    return (
        <div className={styles.container}>
            <div className={styles.authMessage}>
                {isAuthenticated
                    ? "Hello, você está autenticado"
                    : "Olá, parece que você ainda não fez login.."}
            </div>

            <div className="buttonContainer">
                {showTimer ? <ButtonLogin /> : null}
            </div>
        </div>
    );
}

export default Home;
