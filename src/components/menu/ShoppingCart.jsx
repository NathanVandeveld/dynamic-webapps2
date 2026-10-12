import {useState} from "react";
import {Button, Modal} from "react-bootstrap";

export function ShoppingCart(props) {
    const {cart} = props;
    const [show, setShow] = useState(false);

    // Derived state: gewone const, geen useState
    const totalAmount = cart.reduce((total, orderLine) => total + orderLine.amount, 0);

    function handleShow() {
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {totalAmount}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Winkelmandje</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.length === 0 && <p className="text-muted mb-0">Je winkelmandje is leeg.</p>}
                    {cart.map(orderLine => (
                        <div key={orderLine.id}>
                            {orderLine.name}: {orderLine.amount}x
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Sluiten
                    </Button>
                    <Button variant="primary">
                        Naar betalen
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}