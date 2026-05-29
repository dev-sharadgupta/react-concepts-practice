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

    // =========== Dependency Array Example ==============
    // ----With no dependency 
    // useEffect(() => {
    //     console.log("Run Every Render");
    // })

    // --- with empty dependency
    // useEffect(() => {
    //     console.log("Run once only");
    // }, [])

    // With dependency
    // useEffect(() => {
    //     console.log("Runs when count changes");
    // }, [count]);


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