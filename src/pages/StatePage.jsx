import {Section} from "../components/common/Section.jsx";
import {useState} from "react";
import {Button} from "react-bootstrap";

export function StatePage() {
    const [demoStateValue, setDemoStateValue] = useState(0);

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
                        variant="primary"
                        className="m-2"
                        onClick={() => console.log("bootstrap button is clicked")}
                    >
                        click me please!
                    </Button>
                </div>
            </Section>


        </div>
    );
}