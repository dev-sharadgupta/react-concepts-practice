import { useEffect, useState } from "react";

export default function UseEffectExample() {
    const [count, setCount] = useState(0);

    console.log("Render");

    useEffect(() => {
        console.log("Effect Runs");

        return () => {
            console.log("Cleanup Runs");
        }
    }, [count]);

    return (
        <div>
            <h2>useEffect Example</h2>

            <p>Count : {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}