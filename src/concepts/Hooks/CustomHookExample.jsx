import { useCounter } from "./useCounter";
import { useToggle } from "./useToggle";

export default function CustomHookExample() {
    const { count, increment, decrement } = useCounter(5);
    const { value, toggle } = useToggle();

    console.log("Render");

    return (
        <div>
            <h2>Custom Hook Example</h2>
            <p>Count: {count}</p>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

            <div>
                <button onClick={toggle}>
                    {value ? "ON" : "OFF"}
                </button>
            </div>
        </div>
    );
}