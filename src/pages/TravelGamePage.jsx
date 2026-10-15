import {Alert, Button, Col, Row} from "react-bootstrap";
import {Section} from "../components/common/Section.jsx";
import {useState} from "react";

const TRAVEL_ITEMS = ["zonnebril", "handdoek", "koffer", "sandalen",
    "zwemshort", "boek", "camera", "hoed", "paspoort", "rugzak",
    "waterfles", "spelkaarten", "laptop", "lader", "verrekijker",
    "paraplu", "strandbal", "hangmat", "reisgids", "snacks"];


function pickRandomItem(items) {
   const randomIndex= Math.floor(Math.random()*items.length);
   return items[randomIndex];
}

export function TravelGamePage() {
    const [sequence, setSequence] = useState(() =>[pickRandomItem(TRAVEL_ITEMS)] );

    const latestItem = sequence[sequence.length - 1];

    return (
        <div className="my-4">
            <Alert variant="primary">
                De computer koos '{latestItem}'. Klik op '{latestItem}' om te starten!
            </Alert>

            <ItemSelectionGrid latestItem={latestItem} />
        </div>
    );
}

export function ItemSelectionGrid(props) {
    const {latestItem} = props;
    return (
        <Section title="Kies een voorwerp">
            <Row xs={4} className="g-2">
                {TRAVEL_ITEMS.map((item) => (
                    <Col key={item}>
                        <Button
                            variant={item === latestItem ? "primary" : "outline-secondary"}
                            className="w-100"
                        >
                            {item}
                        </Button>
                    </Col>
                ))}
            </Row>
        </Section>
    );
}