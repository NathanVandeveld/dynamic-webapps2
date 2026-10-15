
import {useState} from "react";
import {Modal, Form} from "react-bootstrap";
import {PrimaryButton, SecondaryButton} from "../common/Buttons.jsx";
import {BsCart} from "react-icons/bs";

function EditableOrderLineSummary(props) {
    const {items, products, onModifyCart} = props;

    if (items.length === 0) {
        return <EmptyOrderMessage />;
    }

    return (
        <>
            {items.map(item => (
                <EditableOrderItemRow
                    key={item.productId}
                    item={item}
                    products={products}
                    onModifyCart={onModifyCart}
                    items={items}
                />
            ))}

            <hr />

            <OrderTotalSummary
                items={items}
                products={products}
            />
        </>
    );
}


export function EmptyOrderMessage() {
    return (
        <p className="text-center my-3">
            Nog niets besteld
        </p>
    );
}

function EditableOrderItemRow(props) {
    const {item, items, products, onModifyCart} = props;

    const product = products.find(
        product => product.id === item.productId
    );

    if (!product) {
        return null;
    }

    function handleAmountChange(event) {
        const newAmount = Number(event.target.value);

        const newItems = items
            .map(orderItem =>
                orderItem.productId === item.productId
                    ? {...orderItem, amount: newAmount}
                    : orderItem
            )
            .filter(orderItem => orderItem.amount > 0);

        onModifyCart(newItems);
    }

    return (
        <div className="my-2">
            <div className="d-flex justify-content-between align-items-center">
                <strong>{product.name}</strong>

                <Form.Control
                    type="number"
                    min="0"
                    value={item.amount}
                    onChange={handleAmountChange}
                    className="w-25"
                />
            </div>

            <div>{product.price}€ per stuk</div>

            <div>
                Subtotaal: {(item.amount * product.price).toFixed(2)}€
            </div>
        </div>
    );
}

function OrderTotalSummary(props) {
    const {items, products} = props;

    const totalPrice = items.reduce((total, item) => {
        const product = products.find(
            product => product.id === item.productId
        );

        return total + (product ? product.price * item.amount : 0);
    }, 0);

    return (
        <div className="d-flex justify-content-between border-top pt-3 mt-3">
            <strong>Totaal:</strong>
            <strong>{totalPrice.toFixed(2)}€</strong>
        </div>
    );
}

export function ShoppingCart(props) {
    const {cart, setCart, products} = props;
    const [show, setShow] = useState(false);

    const totalAmount = cart.reduce((total, orderLine) => total + orderLine.amount, 0);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    function handleModifyCart(newCart) {
        setCart(newCart);
    }
    function handlePayment(){
        setCart([]);
        setShow(false);
    }

    return (
        <>
            <PrimaryButton onClick={handleShow}>
                <BsCart/> {totalAmount}
            </PrimaryButton>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Winkelmandje</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditableOrderLineSummary
                        items={cart}
                        products={products}
                        onModifyCart={handleModifyCart}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <SecondaryButton onClick={handleClose}>
                        Sluiten
                    </SecondaryButton>
                    <PrimaryButton onClick={handlePayment}>naar  betalen</PrimaryButton>
                </Modal.Footer>
            </Modal>
        </>
    );
}
