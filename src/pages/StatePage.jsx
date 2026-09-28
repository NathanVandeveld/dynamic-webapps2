import {Section} from "../components/common/Section.jsx";
import {useState} from "react";
import {Button} from "react-bootstrap";

export function StatePage() {
    const [demoStateValue, setDemoStateValue] = useState(0);
    console.log("StatePage is rendered with demoStateValue = ", demoStateValue);
    return (
        <div className="mx-3">
            <Section title="events">
                <div>
                    <button
                        className="m-2"
                        onClick={() => {
                            console.log("button is clicked");
                        }}
                    >
                        click me please!
                    </button>
                    <Button
                        variant="outline-secondary"
                        className="m-2"
                        onClick={() => console.log("bootstrap button is clicked")}
                    >
                        click me please!
                    </Button>
                </div>
            </Section>
            <Section title="state">
                <div>
                    <div className="m-2">demoStateValue = {demoStateValue}</div>
                    <div className="m-2">demoStateValue = {demoStateValue}</div>
                    <Button variant="outline-secondary me-2"
                            onClick={() => setDemoStateValue(125)}>
                        SET 125
                    </Button>
                    <Button variant="outline-secondary me-2"
                            onClick={() => setDemoStateValue(0)}>
                        SET 0
                    </Button>
                    <Button variant="outline-secondary me-2"
                            onClick={() => {setDemoStateValue(184)}}>
                        SET 184
                    </Button>
                </div>
            </Section>


        </div>
    );
}