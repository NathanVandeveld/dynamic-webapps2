import {Button} from "react-bootstrap";

export function OutlineButton(props) {
    const {onClick, children} = props;
    return (
        <Button variant="outline-secondary me-2" onClick={onClick}>
            {children}
        </Button>
    );
}

export function ToggleButton(props) {
    const {isActive, onToggle} = props;
    return (
        <Button variant="secondary"
                size="sm"
                aria-expanded={isActive}
                onClick={() => onToggle(!isActive)}>
            {isActive ? "-" : "+"}
        </Button>
    );
}