import {Section} from "../components/common/Section.jsx";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {OutlineButton} from "../components/common/Buttons.jsx";

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
                    <OutlineButton
                        onClick={() => setDemoStateValue(125)}>
                        SET 125
                    </OutlineButton>
                    <OutlineButton
                        onClick={() => setDemoStateValue(0)}>
                        SET 0
                    </OutlineButton>
                    <OutlineButton
                        onClick={() =>
                            setDemoStateValue(184)}>
                        SET 184
                    </OutlineButton>
                </div>
            </Section>
            <Section tittle="counter">
            <Counter name="counter"></Counter>
            </Section>
        </div>
    );
}
function Counter(props){
    const {name} = props;
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h3>{name}</h3>
            <p>de waarde van counter A is {counter}</p>
            <OutlineButton onClick={() => setCounter(counter - 1)}>-1</OutlineButton>
            <OutlineButton onClick={() => setCounter(0)}>0</OutlineButton>
            <OutlineButton onClick={() => setCounter(counter + 1)}>+1</OutlineButton>

        </div>
    );
}