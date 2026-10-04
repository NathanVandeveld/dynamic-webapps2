import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Section, SectionCard} from "../components/common/Section.jsx";
import {NUMBER_DATA} from "../data/data.jsx";
import {OutlineButton} from "../components/common/Buttons.jsx";

export function FavoriteNumberPage(){
    const [favorite, setFavorite] = useState(undefined);
    return (
        <Container className="my-4">
            <div className="mb-4">
                <Section title="Kies je favoriete nummer" isInitiallyOpen>
                    <FavoriteNumbers
                        numbers={NUMBER_DATA}
                        onSelectNumber={setFavorite()}/>
                </Section>
            </div>
            <Section title="Je favoriet" isInitiallyOpen>
                <p>Favoriet: {favorite??"(niet gekozen)"}</p>
            </Section>
        </Container>
    );
}
function FavoriteNumbers(props){
    const{numbers,onSelectNumber}=props;
    return (
        <Row xs={2} md={4} className="g-3">
            {numbers.map(n => (
                <Col key={n}>
                    <SectionCard>
                        <p className="h4">{n}</p>
                        <OutlineButton onClick={()=> onSelectNumber(n)}>
                            kies
                        </OutlineButton>
                    </SectionCard>
                </Col>
            ))}
        </Row>
    );
}