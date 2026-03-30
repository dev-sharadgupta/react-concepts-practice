import { useState } from "react";

function Item({ value }) {
    const [text, setText] = useState("");

    console.log("Render:", value);

    return (
        <li>
            {value}
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </li>
    );
}

export default function KeyExample() {
    const [items, setItems] = useState(["A", "B", "C"]);

    return (
        <div>
            <h2>Key Example</h2>

            <button onClick={() => setItems(["X", "A", "B", "C"])}>
                Add at Start
            </button>

            <ul>
                {items.map((item, index) => (
                    <Item key={item} value={item} />
                ))}
            </ul>
        </div>
    );
}