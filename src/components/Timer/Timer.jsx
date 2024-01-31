import { useEffect, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(10);

    useEffect(function () {
        const interval = setInterval(function () {
            setTime(time - 1);
        }, 1000);
        return function () {
            console.log("Cleanup");
            clearInterval(interval);
        };
    });

    return <div>{time}</div>;
}
