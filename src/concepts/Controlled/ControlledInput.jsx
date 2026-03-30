import { useState } from "react";

export default function ControlledInput() {
    const [name, setName] = useState("");

    console.log("Render");
    return (
        <div>
            <h2>Controlled Input</h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
            />

            <p>Typed: {name}</p>
            {name && name.length < 3 &&
                <p>Name too short</p>
            }
        </div>
    )
}
