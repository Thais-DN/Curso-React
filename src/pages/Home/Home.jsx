import { useContext, useState } from "react";
import authContext from "../../context/authContext";
import Timer from "../../components/Timer/Timer";
import styles from "./Home.module.css";
import { useSearchParams } from "react-router-dom";

function Home() {
    const [showTimer, setShowTimer] = useState(true);
    const [searchParams] = useSearchParams();
    const { isAuthenticated } = useContext(authContext);

    return (
        <>
            <h1 className={styles.h1}>hello!</h1>
            {isAuthenticated
                ? "Hello, você esta autenticado"
                : "hello, wellcome"}
            {showTimer ? <Timer /> : null}
            <button
                onClick={function () {
                    setShowTimer(!showTimer);
                }}
            >
                mostra/esconde
            </button>
            <div>{searchParams.get("nome")}</div>
        </>
    );
}

export default Home;
