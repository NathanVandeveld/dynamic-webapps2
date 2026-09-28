import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {NAV_MENU, NAV_PERSONS} from "../constants/navConstants.js";
import {RENDER_DATA_EXERCISES, STATE_EVENTS_EXERCISES} from "../constants/exercisesConstants.js";

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
    const {title, exercises, onSelectExercise} = props;

    return (
        <section className="mb-5">
            <h2 className="h4 mb-3">{title}</h2>
            <Row xs={1} md={2} className="g-3">
                {exercises.map(e => (
                    <Col key={e.key}>
                        <ExerciseCard
                            title={e.title}
                            description={e.description}
                            onSelect={() => onSelectExercise(e.key)}
                        />
                    </Col>
                ))}
            </Row>
        </section>
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
            />
        </Container>
    );
}
