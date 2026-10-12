import {useState} from "react";
import {Container, Form} from "react-bootstrap";
import {Section} from "../components/common/Section.jsx";
import {NUMBER_DATA} from "../data/data.jsx";
import {FavoriteNumbers} from "../components/exercises/FavoriteNumbers.jsx";
import {PrimaryButton} from "../components/common/Buttons.jsx";

export function MultipleFavoriteNumbersPage() {
    const [numbers, setNumbers] = useState(NUMBER_DATA);
    const [favorites, setFavorites] = useState([]);
    const [newNumber, setNewNumber] = useState("");

    function handleSelectNumber(number) {
        if (favorites.includes(number)) {
            setFavorites(favorites.filter(n => n !== number));
        } else {
            setFavorites([...favorites, number]);
        }
    }

    function handleAddNumber() {
        // Leeg veld (of alleen spaties): niets doen
        if (newNumber.trim() === "") {
            return;
        }

        const value = Number(newNumber);

        // Geen geldig getal (bv. "abc"): niets doen
        if (Number.isNaN(value)) {
            return;
        }

        // Elk getal maximum 1 keer
        if (numbers.includes(value)) {
            return;
        }

        // Nieuwe array maken en sorteren van klein naar groot.
        // [...numbers, value] is een kopie, dus NUMBER_DATA blijft ongewijzigd.
        setNumbers([...numbers, value].sort((a, b) => a - b));
        setNewNumber("");
    }

    return (
        <Container className="my-4">
            <div className="mb-4">
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    handleAddNumber();
                }}>
                    <Form.Control
                        type="number"
                        value={newNumber}
                        onChange={(e) => setNewNumber(e.target.value)}
                        placeholder="nieuw nummer"/>
                    <PrimaryButton type="submit">voeg toe</PrimaryButton>
                </Form>
            </div>
            <div className="mb-4">
                <Section title="Kies je favoriete nummers" isInitiallyOpen>
                    <FavoriteNumbers
                        numbers={numbers}
                        markedNumbers={favorites}
                        onSelectNumber={handleSelectNumber}/>
                </Section>
                <p>
                    Mijn favoriete getallen zijn{" "}
                    {favorites.length > 0 ? favorites.join(", ") : "(niet gekozen)"}
                </p>
            </div>
        </Container>
    );
}