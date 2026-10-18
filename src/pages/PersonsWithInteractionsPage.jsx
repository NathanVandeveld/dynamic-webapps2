import {useEffect, useRef, useState} from "react";
import {Dropdown, Form} from "react-bootstrap";

import {OutlineButton} from "../components/common/Buttons.jsx";
import {PERSON_WITH_PROPS_DATA} from "../data/data.jsx";
import {Persons} from "../components/exercises/Persons.jsx";

const SORT_NONE = "none";
const SORT_SCORE_ASC = "scoreAsc";
const SORT_SCORE_DESC = "scoreDesc";
const SORT_NAME_ASC = "nameAsc";
const SORT_NAME_DESC = "nameDesc";

const HOBBIES_LABEL = "Hobby's:";
const HIGHLIGHT_NAME = "hobby-match";

const HIGHLIGHT_CSS = `
    ::highlight(${HIGHLIGHT_NAME}) {
        background-color: yellow;
        color: black;
    }
`;

const COMPARE_FUNCTIONS = {
    [SORT_SCORE_ASC]: (a, b) => a.score - b.score,
    [SORT_SCORE_DESC]: (a, b) => b.score - a.score,
    [SORT_NAME_ASC]: (a, b) => a.name.localeCompare(b.name, "nl"),
    [SORT_NAME_DESC]: (a, b) => b.name.localeCompare(a.name, "nl")
};

export function PersonsWithInteractionsPage() {
    const [showDetails, setShowDetails] = useState(false);
    const [sortOption, setSortOption] = useState(SORT_NONE);
    const [nameFilter, setNameFilter] = useState("");
    const [hobbyFilter, setHobbyFilter] = useState("");
    const [minScore, setMinScore] = useState("");
    const [maxScore, setMaxScore] = useState("");
    const personsContainerRef = useRef(null);

    function handleToggleDetails() {
        setShowDetails(prevShow => !prevShow);
    }

    function handleSelectSort(eventKey) {
        setSortOption(eventKey);
    }

    function handleChangeNameFilter(event) {
        setNameFilter(event.target.value);
    }

    function handleChangeHobbyFilter(event) {
        setHobbyFilter(event.target.value);
    }

    function handleChangeMinScore(event) {
        setMinScore(event.target.value);
    }

    function handleChangeMaxScore(event) {
        setMaxScore(event.target.value);
    }

    const min = minScore === "" ? null : Number(minScore);
    const max = maxScore === "" ? null : Number(maxScore);
    const lowerCaseHobbyFilter = hobbyFilter.toLowerCase();

    const filteredPersons = PERSON_WITH_PROPS_DATA.filter(person =>
            person.name.toLowerCase().includes(nameFilter.toLowerCase())
            && (min === null || Number(person.score) > min)
            && (max === null || Number(person.score) < max)
            && (
                lowerCaseHobbyFilter === ""
                || (person.hobbies ?? []).some(hobby =>
                    hobby.toLowerCase().includes(lowerCaseHobbyFilter)
                )
            )
    );

    const sortedPersons = [...filteredPersons];
    if (sortOption !== SORT_NONE) {
        sortedPersons.sort(COMPARE_FUNCTIONS[sortOption]);
    }

    // Markeer de zoektekst in de hobbies van de getoonde personen,
    // zonder Persons.jsx aan te passen (CSS Custom Highlight API).
    // Draait na elke render, zodat de markering ook klopt na andere filters of sortering.
    useEffect(() => {
        // Niet elke browser ondersteunt dit: dan gewoon niets markeren
        if (!window.CSS?.highlights || typeof window.Highlight === "undefined") {
            return;
        }

        window.CSS.highlights.delete(HIGHLIGHT_NAME);

        const container = personsContainerRef.current;
        if (!container || !showDetails || hobbyFilter === "") {
            return;
        }

        const lowerFilter = hobbyFilter.toLowerCase();
        const ranges = [];
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);

        let node = walker.nextNode();
        while (node) {
            const isLabelNode = node.textContent.startsWith(HOBBIES_LABEL);
            const isInHobbiesLine = node.parentElement?.textContent.startsWith(HOBBIES_LABEL);

            // Alleen de hobbies zelf doorzoeken, niet het label "Hobby's:"
            if (isInHobbiesLine && !isLabelNode) {
                const lowerText = node.textContent.toLowerCase();
                let index = lowerText.indexOf(lowerFilter);

                while (index !== -1) {
                    const range = document.createRange();
                    range.setStart(node, index);
                    range.setEnd(node, index + hobbyFilter.length);
                    ranges.push(range);
                    index = lowerText.indexOf(lowerFilter, index + hobbyFilter.length);
                }
            }

            node = walker.nextNode();
        }

        window.CSS.highlights.set(HIGHLIGHT_NAME, new window.Highlight(...ranges));

        return () => window.CSS.highlights.delete(HIGHLIGHT_NAME);
    });

    return (
        <div className="mx-3">
            <style>{HIGHLIGHT_CSS}</style>

            <div className="my-3 d-flex align-items-center gap-3">
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

                <Form.Group controlId="nameFilter" className="d-flex align-items-center gap-2">
                    <Form.Label className="mb-0 text-nowrap">naam bevat</Form.Label>
                    <Form.Control
                        type="text"
                        value={nameFilter}
                        onChange={handleChangeNameFilter}
                    />
                </Form.Group>

                <Form.Group controlId="hobbyFilter" className="d-flex align-items-center gap-2">
                    <Form.Label className="mb-0 text-nowrap">hobbies bevat</Form.Label>
                    <Form.Control
                        type="text"
                        value={hobbyFilter}
                        onChange={handleChangeHobbyFilter}
                    />
                </Form.Group>

                <Form.Group controlId="minScore" className="d-flex align-items-center gap-2">
                    <Form.Label className="mb-0 text-nowrap">score groter dan</Form.Label>
                    <Form.Control
                        type="number"
                        value={minScore}
                        onChange={handleChangeMinScore}
                    />
                </Form.Group>

                <Form.Group controlId="maxScore" className="d-flex align-items-center gap-2">
                    <Form.Label className="mb-0 text-nowrap">score kleiner dan</Form.Label>
                    <Form.Control
                        type="number"
                        value={maxScore}
                        onChange={handleChangeMaxScore}
                    />
                </Form.Group>
            </div>

            {sortedPersons.length === 0 && (
                <p className="text-center my-3">Geen personen gevonden</p>
            )}

            <div ref={personsContainerRef}>
                <Persons
                    persons={sortedPersons}
                    title="personen"
                    isInitiallyOpen
                    showDetails={showDetails}
                />
            </div>
        </div>
    );
}