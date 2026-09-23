import {Row, Col} from "react-bootstrap";

export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return null;

    return (
        <Row className="fs-5 gx-0">
            <Col>
                {product.name}
                <ProductSize product={product}/>
            </Col>
            <Col xs="auto" className="text-end">
                {product.price.toFixed(2)} &euro;
            </Col>
        </Row>
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