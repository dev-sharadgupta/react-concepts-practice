import { memo, useMemo, useState } from "react";

const Child = memo(function Child({ data }) {
    console.log("Child Render");

    return <p>Count: {data.count}</p>
});

export default function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    console.log("Parent Render");

    // const data = { count }; // New Object every render 

    const data = useMemo(() => {
        return { count };
    }, [count]);

    return (
        <div>
            <h2>useMemo Example</h2>

            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

            <button onClick={() => setOther(other + 1)}>
                Other: {other}
            </button>

            <Child data={data} />
        </div>
    );
}