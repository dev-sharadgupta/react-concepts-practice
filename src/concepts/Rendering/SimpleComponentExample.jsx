import { useState } from "react";

function SimpleComponentExample() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => setCount(count + 1)}>
                Count : {count}
            </button>
        </div>
    )
}

export default SimpleComponentExample
