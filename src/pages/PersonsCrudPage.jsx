import {Persons} from "../components/exercises/Persons.jsx";
import {addPerson, usePersonsData} from "../api/personsQueries.js";
import {OutlineButton} from "../components/common/Buttons.jsx";

export function PersonsCrudPage() {
    const [persons, refresh] = usePersonsData();
    console.log(persons.map(p => p.name));

    async function handleAddDummyPerson(){
    await addPerson({name:"DUMMY",score: 19, city:"Mechelen"});
    refresh();
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