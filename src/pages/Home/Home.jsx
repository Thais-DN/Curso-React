import { useState } from "react";
import Timer from "../../components/Timer/Timer";
import styles from "./Home.module.css";

function Home() {
    const [showTimer, setShowTimer] = useState(true);

    return (
        <>
            <h1 className={styles.h1}>hello!</h1>
            {showTimer ? <Timer /> : null}
            <button
                onClick={function () {
                    setShowTimer(!showTimer);
                }}
            >
                mostra/esconde
            </button>
        </>
    );
}

export default Home;
