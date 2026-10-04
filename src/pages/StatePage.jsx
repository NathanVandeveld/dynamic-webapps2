import {Section} from "../components/common/Section.jsx";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {OutlineButton} from "../components/common/Buttons.jsx";

export function StatePage() {
    const [demoStateValue, setDemoStateValue] = useState(0);
    const[travelingGameResult, setTravelingGameResult] = useState("");
    console.log("StatePage is rendered with demoStateValue = ", demoStateValue);
    return (
        <div className="mx-3">
            <Section title="cheater" isInitiallyOpen>
                <TravelingGameCheater travelingGameResult={travelingGameResult} />
            </Section>
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
            <Section title="state owner?">
                <StateOwnerOrNotOwner/>
            </Section>
            <Section title="ik ga op reis...">
                <TravelingGame
                travelingGameResult={travelingGameResult}
                onTravelingGameResultChange={setTravelingGameResult}/>
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

function ShowNotShowDemo(props) {
    const {valueToShow} = props;
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="my-3 py-2 border border-secondary">
                {show && (
                    valueToShow
                        ? <p>{valueToShow}</p>
                        : <p className="fst-italic">{"<leeg>"}</p>
                )}
                <OutlineButton onClick={() => setShow(!show)}>{show ? "hide" : "show"}</OutlineButton>
            </div>
        </>
    );
}

function StateOwnerOrNotOwner() {
    const [sharedState, setSharedState] = useState("waarde = shared state");
    return (
        <div className="my-3 py-2 border border-secondary">
            <p>{sharedState}</p>
            <AddTailButton tail="!" sharedState={sharedState} onAddTail={setSharedState}/>
            <AddTailButton tail="?" sharedState={sharedState} onAddTail={setSharedState}/>
            <AddTailButton tail="..." sharedState={sharedState} onAddTail={setSharedState}/>
        </div>
    );
}

function AddTailButton(props) {
    const {tail, sharedState, onAddTail} = props;
    const newValue = sharedState + tail;
    return (
        <OutlineButton onClick={() => onAddTail(newValue)}>
            {tail}
        </OutlineButton>
    );
}

const TRAVEL_ITEMS = ["zonnebril", "handdoek", "koffer", "sandalen",
    "zwemshort", "boek", "camera", "hoed", "paspoort", "rugzak",
    "waterfles", "spelkaarten", "laptop", "lader", "verrekijker",
    "paraplu", "strandbal", "hangmat", "reisgids", "snacks"];

function TravelingGame(props) {
    const {travelingGameResult, onTravelingGameResultChange} = props;
        return (
        <div className="my-3 py-2 border border-secondary">
            <p>ik ga op reis en neem mee...</p>
            <ShowNotShowDemo valueToShow={travelingGameResult}/>
            {TRAVEL_ITEMS.map(item => (
                <AddTailButton
                    key={item}
                    tail={`${item} `}
                    sharedState={travelingGameResult}
                    onAddTail={onTravelingGameResultChange}
                />
            ))}
        </div>
    );
}
function TravelingGameCheater(props){
    const {travelingGameResult} = props;
    return(
        <div className="my-3 py-2 border border-secondary">
            <p>ik ga op reis en neem mee...</p>
            <p>{travelingGameResult}</p>
        </div>
    );
}