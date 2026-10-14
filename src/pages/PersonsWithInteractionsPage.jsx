import {useState} from "react";

import {OutlineButton} from "../components/common/Buttons.jsx";
import {PERSON_WITH_PROPS_DATA} from "../data/data.jsx";
import {Persons} from "../components/exercises/Persons.jsx";

export function PersonsWithInteractionsPage() {
    const [showDetails, setShowDetails] = useState(false);

    function handleToggleDetails() {
        setShowDetails(prevShow => !prevShow);
    }

    return (
        <div className="mx-3">
            <div className="my-3">
                <OutlineButton onClick={handleToggleDetails}>
                    {showDetails ? "verberg details" : "toon details"}
                </OutlineButton>
            </div>

            <Persons
                persons={PERSON_WITH_PROPS_DATA}
                title="Personen"
                isInitiallyOpen
                showDetails={showDetails}
            />
        </div>
    );
}