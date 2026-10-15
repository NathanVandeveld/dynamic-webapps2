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

export function TravelGamePage() {
    const [sequence, setSequence] = useState(() => [pickRandomItem()]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [statusMessage, setStatusMessage] = useState(
        () => `De computer koos '${sequence[0]}'. Klik op '${sequence[0]}' om te starten!`
    );

    const latestItem = sequence[sequence.length - 1];

    function handleItemClick(clickedItem) {
        if (isGameOver) {
            return;
        }

        if (clickedItem === latestItem) {
            setStatusMessage("Juist! (vervang door jouw tekst)");
        } else {
            setIsGameOver(true);
            setStatusMessage("Fout! Game over. (vervang door jouw tekst)");
        }
    }

    return (
        <div className="my-4">
            <GameStatusAlert message={statusMessage} isGameOver={isGameOver} />

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