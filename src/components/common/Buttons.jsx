import {Button} from "react-bootstrap";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";

export function OutlineButton(props) {
    const {onClick, className = "", children} = props;
    return (
        <Button
            variant="outline-secondary"
            className={`me-2 ${className}`}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}

export function ToggleButton(props) {
    const {isActive, onToggle} = props;
    return (
        <Button
            variant={isActive ? "secondary" : "primary"}
            size="sm"
            aria-expanded={isActive}
            onClick={() => onToggle(!isActive)}
        >
            {isActive ? <BsChevronUp/> : <BsChevronDown/>}
        </Button>
    );
}

export function PrimaryButton(props) {
    const {onClick, children} = props;
    return (
        <Button variant="primary" onClick={onClick}>
            {children}
        </Button>
    );
}

export function SecondaryButton(props) {
    const {onClick, children} = props;
    return (
        <Button variant="secondary" onClick={onClick}>
            {children}
        </Button>
    );
}