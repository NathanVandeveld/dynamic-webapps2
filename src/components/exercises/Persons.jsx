import {Card, Col, Row} from "react-bootstrap";
import {format} from "date-fns";
import {nlBE} from "date-fns/locale";
import {Section} from "../common/Section.jsx";

export function Person(props) {
    const {person, showDetails = false} = props;
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
                {showDetails && <PersonDetails person={person}/>}
            </Card.Body>
        </Card>
    );
}

function PersonDetails(props) {
    const {person} = props;
    return (
        <div className="small text-muted border-top pt-2">
            {person.role && <div>Rol: {person.role}</div>}
            {person.function && <div>Functie: {person.function}</div>}
            {person.skills && <div>Skills: {person.skills.join(", ")}</div>}
            {person.hobbies && <div>Hobby's: {person.hobbies.join(", ")}</div>}
            {person.registeredAt && (
                <div>
                    Geregistreerd op {format(person.registeredAt, "dd/MM/yyyy", {locale: nlBE})}
                </div>
            )}
        </div>
    );
}

export function Persons(props) {
    const {persons, title, isInitiallyOpen, showDetails = false} = props;
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            <Row>
                {persons.map((person) => (
                    <Col key={person.id} xs={12} sm={6} md={3} xl={2} className="mb-3">
                        <Person person={person} showDetails={showDetails}/>
                    </Col>
                ))}
            </Row>
        </Section>
    );
}