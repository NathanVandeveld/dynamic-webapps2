import {Persons} from "../components/exercises/Persons.jsx";
import {PERSON_DATA} from "../data/data.jsx";

export function PersonsPage() {
    const SortedPersons = [...PERSON_DATA].sort((a, b) => a.name.localeCompare(b.name));
    const SortedPersonsDesc = [...PERSON_DATA].sort((a, b) => b.name.localeCompare(a.name));
    const SortedPersonsByScore = [...PERSON_DATA].sort((a,b) => a.score-b.score);
    return (
        <>
            <Persons persons={PERSON_DATA} title="Personen"/>
            <Persons persons={SortedPersons} title="Personen gesorteerd op naam"/>
            <Persons persons={SortedPersonsDesc} title="personen aflopend gesorteerd op naam"/>
            <Persons persons={SortedPersonsByScore} title="sorteer op score?"/>
        </>
    );
}
