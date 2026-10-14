import {Card, Container} from "react-bootstrap";
import {useSessionStorage} from "usehooks-ts";
import {MenuCategoryList} from "./MenuCategoryList.jsx";
import {ShoppingCart} from "./ShoppingCart.jsx";

export function MenuCard(props) {
    const {products} = props;
    const [cart, setCart] = useSessionStorage("cart", []);

    function handleAddToCart(product) {
        setCart(prevCart => {
            const existingLine = prevCart.find(line => line.productId === product.id);

            if (existingLine) {
                return prevCart.map(line =>
                    line.productId === product.id
                        ? {...line, amount: line.amount + 1}
                        : line
                );
            }

            return [...prevCart, {productId: product.id, amount: 1}];
        });
    }

    return (
        <Card className="shadow mx-auto my-4" style={{maxWidth: "700px"}}>
            <Card.Body className="px-4 pb-5">
                <Container className="sticky-top bg-white d-flex justify-content-between align-items-center py-2">
                    <h1 className="card-title mb-0">Menu</h1>
                    <ShoppingCart cart={cart} setCart={setCart} products={products}/>
                </Container>

                <MenuCategoryList products={products} onAddToCart={handleAddToCart}/>
            </Card.Body>
        </Card>
    );
}