import {Persons} from "../components/exercises/Persons.jsx";
import {usePersonsData} from "../api/personsQueries.js";
import {OutlineButton} from "../components/common/Buttons.jsx";

export function PersonsCrudPage() {
    const [persons] =usePersonsData();
    console.log(persons.map(p => p.name));

    function handleAddDummyPerson(){

    }
    return (
        <div className="mx-3">
            <div>
            <OutlineButton onClick={handleAddDummyPerson}>+dummy</OutlineButton>
            </div>
            <Persons persons={persons} title="Personen" isInitiallyOpen/>
        </div>
    );
}