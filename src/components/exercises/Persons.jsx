import {Card, Col, Row} from "react-bootstrap";
import {Section} from "../common/Section.jsx";

export function Person(props) {
    const {person} = props;
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>
                    Score: {person.score}
                </Card.Text>
                <Card.Text>
                    {person.city}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export function Persons(props) {
    const {persons, title} = props;
    return (
            <Section title={title}>
                <Row>
                    {persons.map((person) => (
                        <Col key={person.id} xs={12} sm={6} md={3} xl={2} className="mb-3">
                            <Person person={person}/>
                        </Col>
                    ))}</Row>
            </Section>

    );
}