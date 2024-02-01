import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion() {
    const [isOpen, setIsOpen] = useState(false);

    function onClickHandler() {
        setIsOpen(!isOpen);
    }
    return (
        <div className="accordion">
            <header>
                <button type="button" onClick={onClickHandler}>
                    Accordion{" "}
                    {isOpen ? (
                        <img
                            src="../images/seta-para-baixo.png"
                            alt="seta para baixo"
                        />
                    ) : (
                        <span>Seta para baixo</span>
                    )}
                </button>
            </header>
            {isOpen ? (
                <main>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repudiandae ducimus officiis cumque natus, atque
                        nesciunt eveniet deserunt sint fuga, a iste excepturi
                        vitae saepe possimus, error praesentium quidem at ad.
                    </p>
                </main>
            ) : null}
        </div>
    );
}
