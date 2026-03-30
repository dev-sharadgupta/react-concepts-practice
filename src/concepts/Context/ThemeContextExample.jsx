import { createContext, memo, useContext, useState } from "react";

const ThemeContext = createContext();

function GrandChild() {
    const theme = useContext(ThemeContext);

    console.log("GrandChild Render");

    return <p>Theme: {theme}</p>
}

// This will Unnecessary Re-render
// function Child() {
//     console.log("Child Render");
//     return <GrandChild />
// }

// Avoid Unnecessary Re-renders using memo
const Child = memo(function Child() {
    console.log("Child Render");
    return <GrandChild />
});

export default function ThemeContextExample() {
    const [theme, setTheme] = useState("light");

    console.log("Parent Render");

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h2>Context API Example</h2>

                <button onClick={() => setTheme("dark")}>
                    Change Theme
                </button>

                <Child />
            </div>
        </ThemeContext.Provider>
    );
}