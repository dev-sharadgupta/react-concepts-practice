import { memo, useCallback, useState } from "react"

const Item = memo(({ item, onSelect }) => {
    console.log("Item Render:", item);

    return <li onClick={() => onSelect(item)}>{item}</li>;
});

export default function UseCallbackExampleList() {
    const [count, setCount] = useState(0);

    const items = ["A", "B", "C"];

    const handleSelect = useCallback((item) => {
        console.log("Selected:", item);
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Re-render: {count}
            </button>

            <ul>
                {items.map((item) => (
                    <Item key={item} item={item} onSelect={handleSelect} />
                ))}
            </ul>
        </div>
    )
}
