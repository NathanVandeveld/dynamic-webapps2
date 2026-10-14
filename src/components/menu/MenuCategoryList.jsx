import {useState} from "react";
import {Button, Card, Collapse} from "react-bootstrap";
import {MenuProduct} from "./MenuProduct.jsx";

export function MenuCategoryList(props) {
    const {products, onAddToCart} = props;

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
                    onAddToCart={onAddToCart}
                />
            ))}
        </>
    );
}

export function MenuCategorySection(props) {
    const {category, products, onAddToCart} = props;
    const [open, setOpen] = useState(false);

    function handleToggle() {
        setOpen(prevOpen => !prevOpen);
    }

    return (
        <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <span className="fs-5 fw-bold">{category}</span>
                <Button
                    size="sm"
                    variant={open ? "secondary" : "primary"}
                    onClick={handleToggle}
                >
                    {open ? "-" : "+"}
                </Button>
            </Card.Header>

            <Collapse in={open}>
                <div>
                    <Card.Body>
                        {products.map(product => (
                            <MenuProduct
                                key={product.id}
                                product={product}
                                onAddToCart={onAddToCart}
                            />
                        ))}
                    </Card.Body>
                </div>
            </Collapse>
        </Card>
    );
}