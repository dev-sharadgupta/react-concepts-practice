import { useState } from "react";

export default function PropsStateExample() {
    const [count, setCount] = useState(0);

    console.log("Parent Render");
    return (
        <div>
            <h2>Props vs State</h2>

            <p>Parent Count: {count}</p>

            <Child
                count={count}
                onIncrement={() => setCount(count + 1)}
            />
        </div>
    );
}

function Child({ count, onIncrement }) {
    console.log("Child Render");

    return (
        <div>
            <p>Count from Parent: {count}</p>
            <button onClick={onIncrement}>Increase from Child</button>
        </div>
    );
}