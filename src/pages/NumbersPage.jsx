import {Section} from "../components/common/Section.jsx";
import {SectionCard} from "../components/common/SectionCard.jsx";
import {NUMBER_DATA} from "../data/data.jsx";
import {Col, Row} from "react-bootstrap";

export function NumbersPage() {
    const numbersGreaterThenSix = NUMBER_DATA.filter(n=> n>6);
    const getallenMaalTwee=NUMBER_DATA.map(n=>n*2);
    return (
        <div>
            <Numbers numbers={NUMBER_DATA} title="alle getallen"></Numbers>
            <Numbers numbers={numbersGreaterThenSix} title="getallen groter dan 6"/>
            <Numbers numbers={getallenMaalTwee} title="getallen vermenigvuldigd met é"/>
        </div>

    );

}

function Numbers(props) {
    const {numbers, title} = props;
    return (
        <Section title={title} isInitiallyOpen>
            <Row xs={12} sm={6} md={4} xl={3} className="g-3">
            {numbers.map((number, index) => (
                <Col key={index}>
                <SectionCard>
                    <p className="h4 mb-0">{number}</p>
                </SectionCard>
                </Col>
            ))}
        </Row>
        </Section>
    );

}