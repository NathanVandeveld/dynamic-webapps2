import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {RENDER_DATA_EXERCISES, STATE_EVENTS_EXERCISES} from "../constants/exercisesConstants.js";
import {Section, SectionCard} from "../components/common/Section.jsx";

function OpenExerciseButton(props) {
    const {onClick} = props;

    return (
        <Button
            variant="primary"
            className="mt-3"
            onClick={onClick}
        >
            Open Oefening
        </Button>
    );
}

function ExerciseCard(props) {
    const {title, description, onSelect} = props;

    return (
        <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-muted">{description}</Card.Text>
                </div>
                <OpenExerciseButton onClick={onSelect}/>
            </Card.Body>
        </Card>
    );
}

function ExerciseSection(props) {
    const {title, exercises, onSelectExercise, isInitiallyOpen} = props;

    return (
        <div className="mb-4">
            <Section title={title} isInitiallyOpen={isInitiallyOpen}>
                <Row xs={1} md={3} className="g-3">
                    {exercises.map(e => (
                        <Col key={e.key}>
                            <SectionCard>
                                <Card.Title>{e.title}</Card.Title>
                                <Card.Text className="text-muted">{e.description}</Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => onSelectExercise(e.key)}
                                >
                                    Open Oefening
                                </Button>
                            </SectionCard>
                        </Col>
                    ))}
                </Row>
            </Section>
        </div>
    );
}

export function ExercisesPage(props) {
    const {onSelectExercise} = props;

    return (
        <Container className="my-4">
            <ExerciseSection
                title="Renderen van data"
                exercises={RENDER_DATA_EXERCISES}
                onSelectExercise={onSelectExercise}
            />
            <ExerciseSection
                title="State & Events"
                exercises={STATE_EVENTS_EXERCISES}
                onSelectExercise={onSelectExercise}
                isInitiallyOpen
            />
        </Container>
    );
}
