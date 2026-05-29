import { memo, useState } from "react";

// Child Re-render
// function Child({ value }) {
//     console.log("Child Render");

//     return <p>Child Value: {value}</p>
// }

// Using memo Child not Re-render
const Child = memo(function Child({ value }) {
    console.log("Child Render");

    return <p>Child Value: {value}</p>
});

// Another Way to use props 
// const Child = memo((props) => {
//     console.log("Child Rerender");
//     return <p>Child Value: {props.value}</p>
// });


// === For Obj we have to use like this === 
// const Child = memo(function Child({ value }) {
//     console.log("Child Render");

//     return <p>Child Value: {value.count}</p>
// });

// Another Way to use props 
// const Child = memo((props) => {
//     console.log("Child Rerender");
//     return <p>Child Value: {props.value.count}</p>
// });


export default function ReactMemoExample() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    return (
        <div>
            <h2>React.memo Example</h2>

            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

            <button onClick={() => setOther(other + 1)}>
                Other: {other}
            </button>

            {/* works well */}
            <Child value={count} />

            {/* always re-renders */}
            {/* <Child value={{ count }} /> */}

        </div>
    )
}