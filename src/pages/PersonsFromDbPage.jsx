import {usePersonsData} from "../api/personsQueries.js";
import {Persons} from "../components/exercises/Persons.jsx";
import {Alert, Spinner} from "react-bootstrap";
import {OutlineButton} from "../components/common/Buttons.jsx";

export function PersonsFromDbPage() {
    const [persons, isLoading,isError, refresh] = usePersonsData();
    console.log("PersonsFromDbPage", persons);
    if (isLoading) {
        return <Spinner/>;
    }
    if (isError) {
        return(
            <div className="mx-3">
                <Alert variant="danger">
                    Fout bij het laden van personen: {isError.message}
                </Alert>
            </div>
        );
    }
    return (
        <div className="mx-3">
            <OutlineButton onClick={refresh}>Herlaad data</OutlineButton>
            <Persons persons={persons} title="Personen" isInitiallyOpen/>
        </div>
    );
}