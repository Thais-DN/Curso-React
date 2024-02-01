import { useContext } from "react";
import authContext from "../../context/authContext";
import styles from "./About.module.css";
import Accordion from "../../components/Accordion/Accordion";

function About() {
    const { isAuthenticated, setIsAuthenticated } = useContext(authContext);

    return (
        <>
            <h1 className={styles.h1}>
                {isAuthenticated
                    ? "Hello, you are authenticated in about"
                    : "hello, wellcome"}
            </h1>
            <div className={styles.accordion}>
                <Accordion />
            </div>
        </>
    );
}

export default About;
