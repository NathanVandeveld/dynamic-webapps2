import {Button} from "react-bootstrap";

export function ShoppingCart(props) {
    const {cart} = props;

    // Derived state: gewone const, geen useState
    const totalAmount = cart.reduce((total, orderLine) => total + orderLine.amount, 0);

    return (
        <Button variant="primary">
            {totalAmount}
        </Button>
    );
}