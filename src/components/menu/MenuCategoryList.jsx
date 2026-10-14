import {useState} from "react";
import {Card} from "react-bootstrap";
import {ToggleButton} from "../common/Buttons.jsx";
import {MenuProduct} from "./MenuProduct.jsx";

export function MenuCategoryList(props) {
    const {products, cart, onAddToCart} = props;

    // Derived data: producten groeperen per category
    const categories = [];
    products.forEach(product => {
        let category = categories.find(c => c.name === product.category);
        if (!category) {
            category = {name: product.category, order: product.categoryOrder, products: []};
            categories.push(category);
        }
        category.products.push(product);
    });
    categories.sort((a, b) => a.order - b.order);

    return (
        <>
            {categories.map(category => (
                <MenuCategorySection
                    key={category.name}
                    category={category.name}
                    products={category.products}
                    cart={cart}
                    onAddToCart={onAddToCart}
                />
            ))}
        </>
    );
}

export function MenuCategorySection(props) {
    const {category, products, cart, onAddToCart} = props;
    const [open, setOpen] = useState(false);

    return (
        <Card className="mb-4">
            {/* border-bottom-0 als gesloten: geen dubbele lijn onder de header */}
            <Card.Header
                className={`d-flex justify-content-between align-items-center ${open ? "" : "border-bottom-0"}`}
            >
                <span className="fs-5 fw-bold">{category}</span>
                <ToggleButton isActive={open} onToggle={setOpen}/>
            </Card.Header>

            {/* Enkel renderen als open: geen leeg stukje onder de header */}
            {open && (
                <Card.Body>
                    {products.map(product => {
                        const orderLine = cart.find(line => line.productId === product.id);
                        return (
                            <MenuProduct
                                key={product.id}
                                product={product}
                                amountOrdered={orderLine ? orderLine.amount : 0}
                                onAddToCart={onAddToCart}
                            />
                        );
                    })}
                </Card.Body>
            )}
        </Card>
    );
}