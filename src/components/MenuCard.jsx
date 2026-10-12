import {useState} from "react";
import {Card} from "react-bootstrap";
import {MenuProduct} from "./MenuProduct.jsx";

export function MenuCard(props) {
    const {products} = props;
    const [cart, setCart] = useState([]);

    function handleAddToCart(product) {
        setCart(prevCart => {
            const existingLine = prevCart.find(line => line.id === product.id);

            if (existingLine) {
                // Product zit al in de cart: amount verhogen
                return prevCart.map(line =>
                    line.id === product.id
                        ? {...line, amount: line.amount + 1}
                        : line
                );
            }

            // Product zit nog niet in de cart: toevoegen met amount 1
            return [...prevCart, {id: product.id, amount: 1}];
        });
    }

    console.table(cart);

    return (
        <Card className="shadow mx-auto my-4" style={{maxWidth: "700px"}}>
            <Card.Body className="px-4 pb-5">
                <Card.Title as="h1">Menu</Card.Title>
                {products.map(product => (
                    <MenuProduct
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </Card.Body>
        </Card>
    );
}