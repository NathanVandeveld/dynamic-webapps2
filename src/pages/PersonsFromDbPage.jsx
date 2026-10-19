import {usePersonsData} from "../api/personsQueries.js";
import {Persons} from "../components/exercises/Persons.jsx";
import {Spinner} from "react-bootstrap";

export function PersonsFromDbPage() {
    const [persons, isLoading] = usePersonsData();
    console.log("PersonsFromDbPage", persons);
    if (isLoading) {
        return <Spinner/>;
    }
    return (
        <div className="mx-3">
            <Persons persons={persons} title="Personen" isInitiallyOpen/>
        </div>
    );
}