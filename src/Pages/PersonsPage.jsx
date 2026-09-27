import {Persons} from "../components/exercises/Persons.jsx";
import {PERSON_DATA} from "../data/data.jsx";
import {Card, Col, Row} from "react-bootstrap";

export function PersonsPage() {
    const sortedPersons = [...PERSON_DATA].sort((a, b) => a.name.localeCompare(b.name));
    const sortedPersonsDesc = [...PERSON_DATA].sort((a, b) => b.name.localeCompare(a.name));
    const sortedPersonsByScore = [...PERSON_DATA].sort((a,b) => a.score-b.score);
    const personsOfMechelen = [...PERSON_DATA].filter((person)=>person.city==="Mechelen");
    return (
        <>
            <Persons persons={PERSON_DATA} title="Personen"/>
            <Persons persons={sortedPersons} title="Personen gesorteerd op naam"/>
            <Persons persons={sortedPersonsDesc} title="personen aflopend gesorteerd op naam"/>
            <Persons persons={sortedPersonsByScore} title="sorteer op score"/>
            <Persons persons={personsOfMechelen} title="Personen van Mechelen"/>
            <PersonScores persons={PERSON_DATA} title="scores van de personen"/>
        </>
    );
}
function PersonScores(props) {
    const {persons, title} = props;

    const uniqueScores = [...new Set(persons.map((person) => person.score))]
        .sort((a, b) => a - b);

    const firstNamesByScore = persons.reduce((acc, person) => {
        const firstName = person.name.split(" ")[0];
        if (!acc[person.score]) acc[person.score] = [];
        acc[person.score].push(firstName);
        return acc;
    }, {});

    return (
        <Card className="text-center">
            <Card.Header>
                <h3>{title}</h3>
            </Card.Header>
            <Card.Body>
                <Row>
                    {uniqueScores.map((score) => (
                        <Col key={score} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-3">
                            <ScoreCard score={score} firstNames={firstNamesByScore[score]}/>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </Card>
    );
}

function ScoreCard(props) {
    const {score, firstNames} = props;
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>Score: {score}</Card.Title>
                <Card.Text>{firstNames.join(", ")}</Card.Text>
            </Card.Body>
        </Card>
    );
}
