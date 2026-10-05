import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Section} from "../components/common/Section.jsx";
import {NUMBER_DATA} from "../data/data.jsx";
import {OutlineButton} from "../components/common/Buttons.jsx";
import {SectionCard} from "../components/common/SectionCard.jsx";

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

function FavoriteNumbers(props) {
    const {numbers, onSelectNumber, markedNumber} = props;
    return (
        <Row>
            {numbers.map(((n, index) => (
                <Col key={n}>
                    <SectionCard key={index}
                                 onSelect={() => onSelectNumber(n)}
                                 isMarked={n === markedNumber}>
                        {n}
                    </SectionCard>
                </Col>
            )))}
        </Row>
    );
}
