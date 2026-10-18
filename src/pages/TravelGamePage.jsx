import {useState} from "react";
import {Alert, Badge, Button, Col, Row} from "react-bootstrap";
import {Section} from "../components/common/Section.jsx";

const TRAVEL_ITEMS = ["zonnebril", "handdoek", "koffer", "sandalen",
    "zwemshort", "boek", "camera", "hoed", "paspoort", "rugzak",
    "waterfles", "spelkaarten", "laptop", "lader", "verrekijker",
    "paraplu", "strandbal", "hangmat", "reisgids", "snacks"];

function pickRandomItem() {
    const randomIndex = Math.floor(Math.random() * TRAVEL_ITEMS.length);
    return TRAVEL_ITEMS[randomIndex];
}

function createStartMessage(item) {
    return `De computer koos '${item}'. Klik op '${item}' om te starten!`;
}

export function TravelGamePage() {
    const [sequence, setSequence] = useState(() => [pickRandomItem()]);
    const [stepIndex, setStepIndex] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [statusMessage, setStatusMessage] = useState(
        () => createStartMessage(sequence[0])
    );

    const latestItem = sequence[sequence.length - 1];

    function handleItemClick(clickedItem) {
        if (isGameOver) {
            return;
        }

        const expectedItem = sequence[stepIndex];

        if (clickedItem !== expectedItem) {
            setIsGameOver(true);
            setStatusMessage("Fout! Try again");
            return;
        }

        const isLastInSequence = stepIndex === sequence.length - 1;

        if (isLastInSequence) {
            const newItem = pickRandomItem();

            setSequence([...sequence, newItem]);
            setStepIndex(0);
            setStatusMessage(
                `Juist! Nieuw woord: '${newItem}'. Klik nu alle ${sequence.length + 1} woorden aan, te beginnen bij het eerste.`
            );
        } else {
            setStepIndex(stepIndex + 1);
            setStatusMessage("Juist!");
        }
    }

    function handlePlayAgain() {
        const newItem = pickRandomItem();

        setSequence([newItem]);
        setStepIndex(0);
        setIsGameOver(false);
        setStatusMessage(createStartMessage(newItem));
    }

    return (
        <div className="my-4">
            <GameStatusAlert
                message={statusMessage}
                sequence={sequence}
                stepIndex={stepIndex}
                isGameOver={isGameOver}
            />

            {isGameOver && (
                <div className="mb-3">
                    <Button variant="primary" onClick={handlePlayAgain}>
                        opnieuw spelen
                    </Button>
                </div>
            )}

            <ItemSelectionGrid
                latestItem={latestItem}
                onItemClick={handleItemClick}
                disabled={isGameOver}
            />
        </div>
    );
}

function GameStatusAlert(props) {
    const {message, sequence, stepIndex, isGameOver} = props;

    return (
        <Alert
            variant={isGameOver ? "danger" : "primary"}
            className="position-relative"
        >
            <div>{message}</div>

            {isGameOver && <div>{sequence.join(", ")}</div>}

            <Badge
                bg="primary"
                pill
                className="position-absolute bottom-0 end-0 m-2"
            >
                {stepIndex + 1}/{sequence.length}
            </Badge>
        </Alert>
    );
}

export function ItemSelectionGrid(props) {
    const {latestItem, onItemClick, disabled} = props;

    return (
        <Section title="Kies een voorwerp" isInitiallyOpen>
            <Row xs={4} className="g-2">
                {TRAVEL_ITEMS.map((item) => (
                    <Col key={item}>
                        <Button
                            variant={item === latestItem ? "primary" : "outline-secondary"}
                            className="w-100"
                            disabled={disabled}
                            onClick={() => onItemClick(item)}
                        >
                            {item}
                        </Button>
                    </Col>
                ))}
            </Row>
        </Section>
    );
}