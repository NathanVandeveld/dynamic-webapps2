import {useState} from "react";
import {Container} from "react-bootstrap";
import {Section} from "../components/common/Section.jsx";
import {NUMBER_DATA} from "../data/data.jsx";
import {FavoriteNumbers} from "../components/exercises/FavoriteNumbers.jsx";

export function FavoriteNumberPage() {
    const [favorite, setFavorite] = useState(undefined);
    return (
        <Container className="my-4">
            <div className="mb-4">
                <Section title="Kies je favoriete nummer" isInitiallyOpen>
                    <FavoriteNumbers
                        numbers={NUMBER_DATA}
                        markedNumber={favorite}
                        onSelectNumber={setFavorite}/>
                </Section>
                <p>Mijn favoriet getal is {favorite ?? "(niet gekozen)"}</p>
            </div>

        </Container>
    );
}


