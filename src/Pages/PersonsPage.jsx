import {Persons} from "../components/exercises/Persons.jsx";
import {PERSON_DATA} from "../data/data.jsx";
import {Card, Col, Row} from "react-bootstrap";
import {Section} from "../components/common/Section.jsx";

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
            <Cities persons={PERSON_DATA} title="steden van de personen"/>
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

            <Section title={title}>
                <Row>
                    {uniqueScores.map((score) => (
                        <Col key={score} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-3">
                            <ScoreCard score={score} firstNames={firstNamesByScore[score]}/>
                        </Col>
                    ))}
                </Row>
            </Section>

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
function Cities (props){
    const {persons, title} = props;
    const cities = [...new Set(persons.map((person) => person.city))]
        .map((name) => ({
            name,
            inhabitants: persons.filter((person) => person.city === name).length
        }))
        .sort((a, b) => a.inhabitants - b.inhabitants || a.name.localeCompare(b.name));
    return (

        <Section title={title}>
            <Row>
                {cities.map((city) => (
                    <Col key={city.name} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-3">
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{city.name}</Card.Title>
                                <Card.Text>Inwoners: {city.inhabitants}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Section>

    );
}
