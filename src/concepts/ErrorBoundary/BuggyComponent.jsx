import { useState } from "react";

export default function BuggyComponent() {
    const [count, setCount] = useState(0);

    if (count === 3) {
        throw new Error("Crash!");
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}