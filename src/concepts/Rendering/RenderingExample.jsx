import React, { useState } from 'react'

export default function RenderingExample() {
    const [count, setCount] = useState(0);

    console.log("Parent Render");

    return (
        <div>
            <h2>Rendering Example</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <Child value={count} />
        </div>
    )
}

function Child({ value }) {
    console.log("Child Render");

    return <p>Child Value: {value}</p>
}