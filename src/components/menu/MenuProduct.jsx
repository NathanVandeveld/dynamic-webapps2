import {Row, Col, Badge} from "react-bootstrap";
import {BsCartPlus} from "react-icons/bs";
import {OutlineButton} from "../common/Buttons.jsx";

export function MenuProduct(props) {
    const {product, amountOrdered, onAddToCart} = props;
    if (!product?.name) return null;

    return (
        <div className="py-1">
            <Row className="fs-5 gx-0 align-items-center">
                <Col>
                    {product.name}
                    <ProductSize product={product}/>
                </Col>

                <Col xs="auto" className="text-end">
                    {product.price.toFixed(2)} &euro;
                </Col>

                <Col xs="auto" className="ms-3">
                    {/* position-relative: nodig voor de absolute Badge */}
                    <OutlineButton
                        className="position-relative"
                        onClick={() => onAddToCart(product)}
                    >
                        <BsCartPlus/>
                        <ProductAmountOrdered amountOrdered={amountOrdered}/>
                    </OutlineButton>
                </Col>
            </Row>
            <ProductNote product={product}/>
        </div>
    );
}

function ProductAmountOrdered(props) {
    const {amountOrdered} = props;
    if (!amountOrdered) return null;

    return (
        <Badge
            pill
            bg="danger"
            className="position-absolute top-0 start-100 translate-middle"
        >
            {amountOrdered}
        </Badge>
    );
}

function ProductSize(props) {
    const {product} = props;
    if (!product?.size) return null;

    return (
        <span className="text-primary ms-1">
            ({product.size}cl)
        </span>
    );
}

function ProductNote(props) {
    const {product} = props;
    if (!product?.note) return null;
    return (
        <span className="text-primary ms-1">
            {product.note}
        </span>
    );
}