import {Card, Col, Row} from "react-bootstrap";

export function Person(props) {
    const {person} = props;
    return (
        <Card>
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
        <Card>
            <Card.Header>
                <h3>{title}</h3>
            </Card.Header>
            <Card.Body>
                <Row>
                    {persons.map((person) => (
                        <Col key={person.id} xs={12} sm={6} md={3} xl={2} className="mb-3">
                            <Person person={person}/>
                        </Col>
                    ))}</Row>
            </Card.Body>
        </Card>
    );
}