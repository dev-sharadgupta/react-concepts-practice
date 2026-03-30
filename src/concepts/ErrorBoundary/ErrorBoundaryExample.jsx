import BuggyComponent from "./BuggyComponent";
import ErrorBoundary from "./ErrorBoundary";

export default function ErrorBoundaryExample() {
    return (
        <div>
            <h2>Error Boundary Example</h2>

            <ErrorBoundary>
                <BuggyComponent />
            </ErrorBoundary>

            <p>This should not crash</p>
        </div>
    );
}