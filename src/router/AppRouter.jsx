import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SimpleComponentExample from "../concepts/Rendering/SimpleComponentExample";
import RenderingExample from "../concepts/Rendering/RenderingExample";
import PropsStateExample from "../concepts/PropsState/PropsStateExample";
import UseEffectExample from "../concepts/Effects/UseEffectExample";
import UseLayoutEffectExample from "../concepts/Effects/UseLayoutEffectExample";
import ControlledInput from "../concepts/Controlled/ControlledInput";
import ReactMemoExample from "../concepts/Memoization/ReactMemoExample";
import UseMemoExample from "../concepts/Memoization/UseMemoExample";
import UseCallbackExample from "../concepts/Memoization/UseCallback/UseCallbackExample";
import UseCallbackExampleList from "../concepts/Memoization/UseCallback/UseCallbackExampleList";
import UseCallbackExampleUseEffectProblem from "../concepts/Memoization/UseCallback/useCallBackExampleUseEffectProblem";
import ThemeContextExample from "../concepts/Context/ThemeContextExample";
import CustomHookExample from "../concepts/Hooks/CustomHookExample";
import ErrorBoundaryExample from "../concepts/ErrorBoundary/ErrorBoundaryExample";
import KeyExample from "../concepts/Reconciliation/KeyExample";

function Navbar() {
    return (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link to="/">Simple Component Example</Link>
            <Link to="/rendering-example">Rendering</Link>
            <Link to="/props-state">PropsState</Link>
            <Link to="/use-effect">useEffect</Link>
            <Link to="/use-layout-effect">useLayoutEffect</Link>
            <Link to="/controlled">Controlled</Link>
            <Link to="/react-memo">React.memo</Link>
            <Link to="/use-memo">useMemo</Link>
            <Link to="/use-callback">useCallback</Link>
            <Link to="/use-callback-list">useCallback List</Link>
            <Link to="/use-callback-useeffect-problem">useCallback useEffect Problem</Link>
            <Link to="/context">Context</Link>
            <Link to="/custom-hook">CustomHook</Link>
            <Link to="/error-boundary">ErrorBoundary</Link>
            <Link to="/reconciliation">Reconciliation</Link>
        </div>
    );
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<SimpleComponentExample />} />
                <Route path="/rendering-example" element={<RenderingExample />} />
                <Route path="/props-state" element={<PropsStateExample />} />
                <Route path="/use-effect" element={<UseEffectExample />} />
                <Route path="/use-layout-effect" element={<UseLayoutEffectExample />} />
                <Route path="/controlled" element={<ControlledInput />} />
                <Route path="/react-memo" element={<ReactMemoExample />} />
                <Route path="/use-memo" element={<UseMemoExample />} />
                <Route path="/use-callback" element={<UseCallbackExample />} />
                <Route path="/use-callback-list" element={<UseCallbackExampleList />} />
                <Route path="/use-callback-useeffect-problem" element={<UseCallbackExampleUseEffectProblem />} />
                <Route path="/context" element={<ThemeContextExample />} />
                <Route path="/custom-hook" element={<CustomHookExample />} />
                <Route path="/error-boundary" element={<ErrorBoundaryExample />} />
                <Route path="/reconciliation" element={<KeyExample />} />
            </Routes>
        </BrowserRouter>
    )
}