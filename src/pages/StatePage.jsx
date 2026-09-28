import {Section} from "../components/common/Section.jsx";
import {useState} from "react";
import {Button, Card, CardBody} from "react-bootstrap";
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
            <Section title="counter">
                <Counter name="A"></Counter>
                <Counter name="B"></Counter>
            </Section>
            <Section title="on/off demo">
            <OnOffDemo></OnOffDemo>
            </Section>
            <Section title="show/not show demo">
                <ShowNotShowDemo valueToShow="Hello, I am here!"/>
            </Section>
        </div>
    );
}

function Counter(props) {
    const {name} = props;
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div className="my-3 py-2 border border-secondary">
                <p>de waarde van counter {name} is {counter}</p>
                <OutlineButton onClick={() => setCounter(counter - 1)}>-</OutlineButton>
                <OutlineButton onClick={() => setCounter(0)}>0</OutlineButton>
                <OutlineButton onClick={() => setCounter(counter + 1)}>+</OutlineButton>
            </div>
        </>
    );
}

function OnOffDemo() {
    const [isOn, setIsOn] = useState(false);
    return (
        <>
            <div className="my-3 py-2 border border-secondary">
                <p>huidige waarde van isOn is: {isOn ? "on" : "off"}</p>
                <OutlineButton onClick={() => setIsOn(true)}>on</OutlineButton>
                <OutlineButton onClick={() => setIsOn(false)}>off</OutlineButton>
                <OutlineButton onClick={() => setIsOn(!isOn)}>toggle</OutlineButton>
            </div>
        </>
    );

}
function ShowNotShowDemo(props){
    const {valueToShow} = props;
    const [show, setShow] = useState(false);
    return (
        <>
        <div className="my-3 py-2 border border-secondary">
            <p>{show ? valueToShow : ""}</p>
            <OutlineButton onClick={() => setShow(!show)}>{show ? "hide" : "show"}</OutlineButton>
        </div></>
    );
}