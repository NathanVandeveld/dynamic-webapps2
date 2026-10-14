import {useState} from "react";
import {Dropdown} from "react-bootstrap";

import {OutlineButton} from "../components/common/Buttons.jsx";
import {PERSON_WITH_PROPS_DATA} from "../data/data.jsx";
import {Persons} from "../components/exercises/Persons.jsx";

// Constanten voor de sorteeropties
const SORT_NONE = "none";
const SORT_SCORE_ASC = "scoreAsc";
const SORT_SCORE_DESC = "scoreDesc";
const SORT_NAME_ASC = "nameAsc";
const SORT_NAME_DESC = "nameDesc";

const COMPARE_FUNCTIONS = {
    [SORT_SCORE_ASC]: (a, b) => a.score - b.score,
    [SORT_SCORE_DESC]: (a, b) => b.score - a.score,
    [SORT_NAME_ASC]: (a, b) => a.name.localeCompare(b.name, "nl"),
    [SORT_NAME_DESC]: (a, b) => b.name.localeCompare(a.name, "nl")
};

export function PersonsWithInteractionsPage() {
    const [showDetails, setShowDetails] = useState(false);
    const [sortOption, setSortOption] = useState(SORT_NONE);

    function handleToggleDetails() {
        setShowDetails(prevShow => !prevShow);
    }

    function handleSelectSort(eventKey) {
        setSortOption(eventKey);
    }

    const sortedPersons = [...PERSON_WITH_PROPS_DATA];
    if (sortOption !== SORT_NONE) {
        sortedPersons.sort(COMPARE_FUNCTIONS[sortOption]);
    }

    return (
        <div className="mx-3">
            <div className="my-3 d-flex align-items-center">
                <OutlineButton onClick={handleToggleDetails}>
                    {showDetails ? "verberg details" : "toon details"}
                </OutlineButton>

                <Dropdown onSelect={handleSelectSort}>
                    <Dropdown.Toggle variant="secondary" size="sm">
                        sorteer
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey={SORT_SCORE_ASC}>sorteer op score oplopend</Dropdown.Item>
                        <Dropdown.Item eventKey={SORT_SCORE_DESC}>sorteer op score aflopend</Dropdown.Item>
                        <Dropdown.Item eventKey={SORT_NAME_ASC}>sorteer op naam oplopend</Dropdown.Item>
                        <Dropdown.Item eventKey={SORT_NAME_DESC}>sorteer op naam aflopend</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item eventKey={SORT_NONE}>geen sortering</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <Persons
                persons={sortedPersons}
                title="personen"
                isInitiallyOpen
                showDetails={showDetails}
            />
        </div>
    );
}