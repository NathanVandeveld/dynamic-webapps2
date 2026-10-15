import {useState} from "react";
import {Alert, Button, Col, Row} from "react-bootstrap";
import {Section} from "../components/common/Section.jsx";

const TRAVEL_ITEMS = ["zonnebril", "handdoek", "koffer", "sandalen",
    "zwemshort", "boek", "camera", "hoed", "paspoort", "rugzak",
    "waterfles", "spelkaarten", "laptop", "lader", "verrekijker",
    "paraplu", "strandbal", "hangmat", "reisgids", "snacks"];

function pickRandomItem() {
    const randomIndex = Math.floor(Math.random() * TRAVEL_ITEMS.length);
    return TRAVEL_ITEMS[randomIndex];
}
function createStartMessage(item){
    return `De computer koos '${item}'. Klik op '${item}' om te starten!`
}

export function TravelGamePage() {
    const [sequence, setSequence] = useState(() => [pickRandomItem()]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [statusMessage, setStatusMessage] = useState(
        () =>createStartMessage(sequence[0])
    );

    const latestItem = sequence[sequence.length - 1];

    function handleItemClick(clickedItem) {
        if (isGameOver) {
            return;
        }

        if (clickedItem === latestItem) {
            setStatusMessage("Juist!");
        } else {
            setIsGameOver(true);
            setStatusMessage("Fout! Game over.");
        }
    }
    function handlePlayAgain() {
        const newItem = pickRandomItem();
        setSequence([newItem]);
        setIsGameOver(false);
        setStatusMessage(createStartMessage(newItem));
    }

    return (
        <div className="my-4">
            <GameStatusAlert message={statusMessage} isGameOver={isGameOver} />
            {isGameOver && (
                <div className="text-center mt-3">
                    <Button variant="primary" onClick={handlePlayAgain}>
                        Opnieuw spelen
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
    const {message, isGameOver} = props;

    return (
        <Alert variant={isGameOver ? "danger" : "primary"}>
            {message}
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