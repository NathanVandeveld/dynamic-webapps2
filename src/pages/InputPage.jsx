import {useState} from "react";

export function InputPage() {
    const [testInput, setTestInput] = useState("");
    return (
        <div className="mx-3">
            <div className="mb-3">
                <label htmlFor="search">test input: </label>
                <input className="m-2"
                       id="search"
                       value={testInput}
                       onChange={(e) => setTestInput(e.target.value)}/>
            </div>
            <div className="mb-3">de waarde is: {testInput}</div>
            <div className="mb-3">
                <label htmlFor="search">test input (hetzelfde): </label>
                <input className="m-2"
                       id="search"
                       value={testInput}
                       onChange={(e) => setTestInput(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="bootstrapInput" className="form-label">
                    test input (Bootstrap):
                </label>
                <input className="form-control"
                       id="bootstrapInput"
                       value={testInput}
                       onChange={(e) => setTestInput(e.target.value)}/>
            </div>
        </div>
    );
}