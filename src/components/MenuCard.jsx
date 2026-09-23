import {Card} from "react-bootstrap";
import {MenuProduct} from "./MenuProduct.jsx";

export function MenuCard(props) {
    const {products} = props;
    return (
        <Card className="shadow mx-auto my-4" style={{maxWidth: "700px"}}>
            <Card.Body className="px-4 pb-5">
                <Card.Title as="h1">Menu</Card.Title>
                {products.map(product => <MenuProduct key={product.id} product={product}/>)}
            </Card.Body>
        </Card>
    );
}