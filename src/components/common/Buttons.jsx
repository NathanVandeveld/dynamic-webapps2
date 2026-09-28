import {Button} from "react-bootstrap";

export function OutlineButton(props) {
    const {onClick, children} = props;
    return (
    <Button variant="outline-secondary me-2" onClick={onClick}>
        {children}
    </Button>
    );
}