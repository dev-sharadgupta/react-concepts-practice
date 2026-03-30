import { useCallback, useEffect, useState } from "react";

export default function UseCallbackExampleUseEffectProblem() {
    const [count, setCount] = useState(0);

    // Infinite effect calls when button hit
    // const fetchData = () => {
    //     console.log("Fetching....");
    // }

    const fetchData = useCallback(() => {
        console.log("Fetching....");
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </div>
    )
}