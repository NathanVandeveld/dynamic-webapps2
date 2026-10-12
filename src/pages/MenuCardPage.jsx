import {Container} from "react-bootstrap";
import {MenuCard} from "../components/menu/MenuCard.jsx";
import {PRODUCTS_DATA} from "../data/data.jsx";

export function MenuCardPage() {
    return (
        <Container className="mt-3">
            <MenuCard products={PRODUCTS_DATA}/>
        </Container>
    );
}
