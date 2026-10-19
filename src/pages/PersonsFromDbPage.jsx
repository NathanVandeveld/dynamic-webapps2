import {usePersonsDataWhereScoreLargerThen} from "../api/personsQueries.js";
import {Persons} from "../components/exercises/Persons.jsx";
import {Alert, Form, Spinner} from "react-bootstrap";
import {OutlineButton} from "../components/common/Buttons.jsx";
import {useState} from "react";

export function PersonsFromDbPage() {
    const [minScore, setMinScore] = useState("");
    const scoreParam = minScore === "" ? null : Number(minScore);
    const [persons, isLoading, isError, refresh] = usePersonsDataWhereScoreLargerThen(scoreParam);

    return (
        <div className="mx-3">
            <div className="d-flex justify-content-between align-items-end mb-3">
                <Form.Group controlId="minScoreInput">
                    <Form.Label>Minimum score:</Form.Label>
                    <Form.Control
                        type="number"
                        value={minScore}
                        onChange={(e) => setMinScore(e.target.value)}
                        placeholder="filter op score"
                    />
                </Form.Group>
            </div>
            {isLoading && <Spinner/>}
            {isError && (
                <Alert variant="danger">
                    Fout bij het laden van personen: {isError.message}
                </Alert>
            )}
            <OutlineButton onClick={refresh}>Herlaad data</OutlineButton>
            <Persons persons={persons} title="Personen" isInitiallyOpen/>
        </div>
    );
}