import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ onClick }) {
    console.log("Child Render");

    return <button onClick={onClick}>Click Me</button>;
});

export default function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    console.log("Parent Render");

    const handleClick = useCallback(() => {
        console.log("Clicked", count);
    }, [count]);

    return (
        <div>
            <h2>useCallback Example</h2>

            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

            <button onClick={() => setOther(other + 1)}>
                Other: {other}
            </button>

            <Child onClick={handleClick} />
        </div>
    );
}