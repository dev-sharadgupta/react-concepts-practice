import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffectExample() {
    const [text, setText] = useState("Hello");
    const ref = useRef();

    // useEffect(() => {
    //     ref.current.style.color = "red";
    // }, [text]);  // You may see flicker

    useLayoutEffect(() => {
        ref.current.style.color = "red";
    }, [text]);
    return (
        <div>
            <h2 ref={ref}>{text}</h2>

            <button onClick={() => setText("Updated Text")}>
                Change Text
            </button>
        </div>
    );
}