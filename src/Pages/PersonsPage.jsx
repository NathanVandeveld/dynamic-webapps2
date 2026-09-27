import {Persons} from "../components/exercises/Persons.jsx";
import {PERSON_DATA} from "../data/data.jsx";

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
        </>
    );
}
