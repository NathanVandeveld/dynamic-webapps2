import {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Section} from "../components/common/Section.jsx";

export function EventPage() {
    const [position, setPosition] = useState(null);
    return (
        <Container className="my-4">
            <Section title="Synthetic event">
                <Row>
                    <Col className="border rounded bg-warning d-flex align-items-center justify-content-center"
                         style={{height: "300px"}}
                         onClick={e => setPosition({x: e.clientX, y: e.clientY})}>
                        {position ? `click(${position.x}, ${position.y})` : "Klik ergens in dit vak"}
                    </Col>
                </Row>
            </Section>
            <Section title="prevent Default">
                <a href="/" onClick={e => {
                    e.preventDefault();
                    console.log("link is kliked");
                }}>
                    Klik op deze link
                </a>
            </Section>
            <Section title="stop propagation">
                <Row>
                    <Col className="border rounded bg-info p-4"
                         onClick={() => console.log("div clicked")}>
                        <Button onClick={e => {
                            e.stopPropagation();
                            console.log("button clicked");
                        }}>
                            normal button
                        </Button>
                    </Col>
                </Row>
            </Section>
        </Container>
    );
}