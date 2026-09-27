import {Container} from "react-bootstrap";
import {Persons} from "../components/exercises/Persons.jsx";
import {PERSON_DATA} from "../data/data.jsx";

export function PersonsPage() {
    return (

            <Persons persons={PERSON_DATA} title="Personen" />

    );
}
