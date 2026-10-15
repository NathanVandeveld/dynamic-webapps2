import {Button, Col, Row} from "react-bootstrap";
import {Section} from "../components/common/Section.jsx";

const TRAVEL_ITEMS = ["zonnebril", "handdoek", "koffer", "sandalen",
    "zwemshort", "boek", "camera", "hoed", "paspoort", "rugzak",
    "waterfles", "spelkaarten", "laptop", "lader", "verrekijker",
    "paraplu", "strandbal", "hangmat", "reisgids", "snacks"];


export function TravelGamePage() {
    return (
        <div className="my-4">
            <ItemSelectionGrid/>
        </div>
    );
}

export function ItemSelectionGrid() {
    return (
        <Section title="Travel Game">
            <Row xs={4} md={3} lg={2} className="g-3">
                {TRAVEL_ITEMS.map((item) => (
                    <Col key={item}>
                        <Button variant="outline-secondary" className="w-100">
                            {item}
                        </Button>
                    </Col>
                ))}
            </Row>
        </Section>
    );
}